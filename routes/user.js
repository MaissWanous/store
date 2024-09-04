const express = require('express');
const router = express.Router();
const userService = require("../service/userService");

router.get('/signup', async (req, res) => {
    try {
        // const { username, email, password } = req.body; // استخراج بيانات المستخدم من الطلب
        // const newUser = await userService.createUser({ username, email, password });
        // res.status(201).json({ message: 'User created successfully', user: newUser });
        res.send("hii")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;