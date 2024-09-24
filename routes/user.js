const express = require("express");
const session = require("express-session");
const userService = require("../service/userService");

const app = express();
const router = express.Router();


app.use(express.json());


// app.use(session({
//     secret: 'secret', 
//     cookie: { maxAge: 3000 },
//     saveUninitialized: true,
//     resave: false,
//     store: new session.MemoryStore()
// }));

let checkCode = 0;

router.post("/signup", async (req, res) => {
  const { username, phone, email, password } = req.body;

  try {
    const data = await userService.checkUser({
      username,
      phone,
      email,
      password,
    });
    const userData = data.userData; // التأكد من تعريف userData هنا
    console.log(userData);
    // req.session.userData = userData; 
    checkCode = parseInt(data.checkCode);

    console.log(checkCode);
    res.status(200).json({ message: "Signup successful, check your code." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
});

router.post("/checkCode", async (req, res) => {
  const userCode = parseInt(req.body.checkCode);
//   const userData = req.session.userData; 
  try {
    if (userCode === checkCode) {
      if (userData) {
        await userService.addUser(userData);
        res.status(200).json({ message: "User added successfully." });
      } else {
        res.status(400).json({ error: "User data not found in session." });
      }
    } else {
      res.status(400).json({ error: "Invalid check code." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding the user." });
  }
});
router.post("/logIn",async function(req,res){
    const {email,password}=req.body;
    try {
        const data = await userService.checkLogIn({
          email,password
        });
        if(data){
            console.log("SignIn successful")
        res.status(200).json({ message: "SignIn successful" });}
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Invalid data" });
      }

})
router.post("/forgetPassword",async function(req,res){
    const email=req.body;
})

module.exports = router;
