const express = require("express");
const jwtService = require("../service/jwtService");
const userService = require("../service/userService");
const app = express();
const router = express.Router();
app.use(express.json());
router.post("/refresh", async (req, res) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
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
        console.log(user)
        if (!user) return res.status(403).json({ message: 'Forbidden' });

        const newAccessToken = jwtService.generateToken({ userId: user.id }); // إنشاء JWT جديد

        res.json({ token: newAccessToken });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
}
)
module.exports = router;