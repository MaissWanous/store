const express = require("express");
const userService = require("../service/userService");
const authService = require('../services/authService');

const app = express();
const router = express.Router();

app.use(express.json());

let checkCode = 0;
let userData;
let emailForget
router.post("/signup", async (req, res) => {
  const { username, phone, email, password } = req.body;

  try {
    const data = await userService.checkUser({
      username,
      phone,
      email,
      password,
    });
    userData = data.userData;
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
    console.log(checkCode == userCode)

    if (userCode == checkCode) {
      if (userData) {
        await userService.addUser(userData);
        const token = await authService.login(userData.email,userData.password);
        res.json({ token })
      }
      res.status(200).json({ message: "Check code." });

    } else {
      res.status(400).json({ error: "Invalid check code." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding the user." });
  }
});
router.post("/logIn", async function (req, res) {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.json({ token })
    res.status(200).json({ message: data.message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
});

router.post("/forgetPassword", async function (req, res) {
  emailForget = req.body.email;
  try {
    const data = await userService.checkEmailExisting(email);
    if (data) {
      checkCode = await userService.sendCode(email);
      console.log(checkCode);
      res.status(200).send("Email send")
    }
    emailForget = email;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
});
router.post("/resetPass", async function (req, res) {

  const { password } = req.body;
  try {
    const updatePass = await userService.updatePassword(
      emailForget,
      password
    );
    console.log(updatePass);
    res.status(200).send("reset password")

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
})
module.exports = router;
