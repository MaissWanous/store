const User = require('../models/user');
const bcrypt = require('bcryptjs');

const userService = {
    async createUser(userData) {
        // التحقق من صحة البيانات (يمكن إضافة المزيد من التحقيقات)
        if (!userData.username || !userData.email || !userData.password) {
            throw new Error('Missing required fields');
        }

        // تشفير كلمة المرور
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

        try {
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;