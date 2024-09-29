const express = require("express");
const userService = require("../service/userService");
<<<<<<< HEAD
const authService = require("../service/authService");
=======
const authService = require('../service/authService');
>>>>>>> afe0eee279e18bc20d26cf84a2b5b7a31da1ff42
const jwtService = require("../service/jwtService");

const app = express();
const router = express.Router();

app.use(express.json());

let checkCode = 0;
let userData;
let emailForget;
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
    console.log(checkCode == userCode);

    if (userCode == checkCode) {
      if (userData) {
        await userService.addUser(userData);
        const token = await authService.login(
          userData.email,
          userData.password
        );
        res.json({ token });
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
    res.status(200).json({ token: token.token, message: token.message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
});

router.post("/forgetPassword", async function (req, res) {
  emailForget = req.body.email;
  try {
    const data = await userService.checkEmailExisting(emailForget);
    if (data) {
      checkCode = await userService.sendCode(emailForget);
      console.log(checkCode);
      res.status(200).send("Email send");
    }
<<<<<<< HEAD
=======

>>>>>>> afe0eee279e18bc20d26cf84a2b5b7a31da1ff42
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
});
router.post("/resetPass", async function (req, res) {
  const { password } = req.body;
  try {
    const updatePass = await userService.updatePassword(emailForget, password);
    console.log(updatePass);
    res.status(200).send("reset password");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid data" });
  }
<<<<<<< HEAD
});

router.get(
  "/profile",
  async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized: Missing Authorization header",
      });
    }
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    }
    try {
      const decoded = jwtService.verifyToken(token); // تحقق من صحة Refresh Token

      const user = await userService.findById(decoded.userId); // ابحث عن المستخدم بناءً على معرف المستخدم في التوكن

      if (!user) return res.status(403).json({ message: "Forbidden" });

      res.json({ user: user });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Unauthorized" });
    }
  },

  router.post("/updateUser", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Missing Authorization header" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    }

    try {
      const decoded = jwtService.verifyToken(token);
      const userId = decoded.userId;

      const { username, phone } = req.body;

      const updatedUser = await userService.updateUser(userId, {
        username,
        phone,
      });

      res.status(200).json({
        message: "User information updated successfully.",
        user: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "An error occurred while updating the user information.",
      });
    }
  })
);
=======
})

router.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Unauthorized: Missing Authorization header'
    });
  }
  const token = authHeader.split(' ')[1];
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
  }
  try {
    const decoded = jwtService.verifyToken(token); // تحقق من صحة Refresh Token

    const user = await userService.findById(decoded.userId); // ابحث عن المستخدم بناءً على معرف المستخدم في التوكن
    
    if (!user) return res.status(403).json({ message: 'Forbidden' });

    res.json({ user: user });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized' });
  }
}
)
>>>>>>> afe0eee279e18bc20d26cf84a2b5b7a31da1ff42

module.exports = router;
