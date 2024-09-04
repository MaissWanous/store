const { where } = require('sequelize');
const { user } = require('../models');
const bcrypt = require('bcryptjs');

const userService = {
    async createUser(userData) {
        if (!userData.username || !userData.phone || !userData.email || !userData.password) {
            throw new Error('Missing required fields');
        }

        // password encryption
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        userData.phone = parseInt(userData.phone)
        try {
            const newUser = await user.create(userData);
            return newUser;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;