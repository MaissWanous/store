const express = require('express');
const session = require('express-session');
const userService = require("../service/userService");

const app = express();
const router = express.Router();


app.use(session({
    secret: 'secret', 
    cookie: { maxAge: 3000 },
    saveUninitialized: false,
    store: new session.MemoryStore()
}));

let checkCode = 0;
let userData;


router.post('/signup', async (req, res) => {
    const { username, phone, email, password } = req.body;

    try {
       const data = await userService.checkUser({ username, phone, email, password });
        checkCode = parseInt(data.checkCode);
        userData = data.userData;
        console.log(checkCode)
        res.status(200).json({ message: 'Signup successful, check your code.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Invalid data' });
    }
});

router.post('/checkCode', async (req, res) => {
    const userCode = parseInt(req.body.checkCode);

    try {
        if (userCode === checkCode) {
            if(userData)
            await userService.addUser(userData);
            res.status(200).json({ message: 'User added successfully.' });
        } else {
            res.status(400).json({ error: 'Invalid check code.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the user.' });
    }
});

module.exports = router;
