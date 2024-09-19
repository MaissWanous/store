const { user } = require('../models');
const bcrypt = require('bcryptjs');

const userService = {

    async checkEmail(email) {
        // Validate email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email.toLowerCase())) {
            throw new Error('Invalid email format. Please enter a valid email address.');
        }
        // Check for existing user with the same email 
        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('Email address already in use. Please try a different email.');
        }

        return true;
    },
     
    async sendCode(email){

        try {
            const confirmCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random 4-digit number
            const transporter = nodemailer.createTransport({
              host: "smtp.elasticemail.com",
              port: 2525,
              auth: {
                user: "hananalrstom87@gmail.com",
                pass: "1980E59A59ABF2E83538525EF3B1FD9C1824",
              },
            });
    
            const info = await transporter.sendMail({
              from: "hananalrstom87@gmail.com",
              to: email,
              subject: "confirm your email ",
              text: "To confirm your password, please use the following One Time code:",
              html: `To confirm, please use the following One Time code <strong>${confirmCode}</strong>`,
            });
    
            console.log("Message sent:", info.messageId);
          } catch (error) {
            console.error("Error sending email:", error);
          }

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
            await this.sendCode(userData.email);
            return newUser;
        } catch (error) {
            throw error;
        }
        
    }
};

module.exports = userService;