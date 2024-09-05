const { user } = require('../models');
const bcrypt = require('bcryptjs');

const userService = {

    async checkEmail(email) {
        // Validate email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let Email = email.toLowerCase();
        if (!emailRegex.test(email.toLowerCase())) {
            throw new Error('Invalid email format. Please enter a valid email address.');
        }

        if (!Email.includes("@gmail.com")) {
            throw new Error("Please check the email address entered and try again. it must be as follows: *******@gmail.com ",
            );

        }

        // Check for existing user with the same email 
        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('Email address already in use. Please try a different email.');
        }

        return true;
    },

    async createUser(userData) {
        if (!userData.username || !userData.phone || !userData.email || !userData.password) {
            throw new Error('Missing required fields');
        }

        // password encryption
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        userData.phone = parseInt(userData.phone)
        try {
            await this.checkEmail(userData.email); // Validate email and throw error if invalid
            const newUser = await user.create(userData);
            return newUser;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;