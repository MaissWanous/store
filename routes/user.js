const express = require('express');
const router = express.Router();
const userService = require("../service/userService");

router.post('/signup', async (req, res) => {
    try {
        const { username, phone, email, password } = req.body;
        const newUser = await userService.createUser({ username, phone, email, password });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;