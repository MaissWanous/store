const express = require('express');
const app = express()
const session = require('express-session')
const store = new session.MemoryStore()
app.use(session({
    secret: 'secter',
    cookie:{maxAge:3000},
    saveUninitialized: false,
    store: store
}));
const router = express.Router();
const userService = require("../service/userService");
let checkCode = 0;
router.post('/signup', async (req, res) => {
    try {
        const { username, phone, email, password } = req.body;
        const userData = await userService.checkUser({ username, phone, email, password });
        checkCode = parseInt(userData.checkCode);

        console.log(checkCode)
        res.redirect(`/checkCode?userData=${encodeURIComponent(JSON.stringify(userData))}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Invalid data' });
    }
});
router.post('/checkCode', async (req, res) => {
    try {
        const userCode = parseInt(req.body.checkCode);
        const data=req.body;
        console.log(data+"pppppppppppppppp")
        if (userCode == checkCode) {
            userService.createUser(data);
        } else {
            console.log("errr")
        }
        res.send("")
    }
    catch (err) { console.log(err) }
})

module.exports = router;