const { user } = require('../models');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { use } = require('../routes/user');
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

  async sendCode(email) {

    const confirmCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random 4-digit number
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.elasticemail.com",
        port: 2525,
        auth: {
          user: "whiteocjd@gmail.com",
          pass: "70028532E494746FB9CD5CDA7519A033E123",
        },
      });

      const info = await transporter.sendMail({
        from: "whiteocjd@gmail.com",
        to: email,
        subject: "confirm your email ",
        text: "To confirm your password, please use the following One Time code:",
        html: `To confirm, please use the following One Time code <strong>${confirmCode}</strong>`,
      });
      console.log("Message sent:", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    return confirmCode;
  },
  async checkUser(userData) {
    if (!userData.username || !userData.phone || !userData.email || !userData.password) {
      throw new Error('Missing required fields');
    }

    // password encryption
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    userData.phone = parseInt(userData.phone)

    try {
      await this.checkEmail(userData.email); // Validate email and throw error if invalid
      const checkCode = await this.sendCode(userData.email);
      return { checkCode, userData };
    } catch (error) {
      throw error;
    }

  },
  async addUser(data) {
    try {
      const newUser = user.create(data);
      return newUser;
    }
    catch (err) {
      throw err
    }
  }
};

module.exports = userService;