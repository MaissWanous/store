const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const productsService = require("../service/productsService");
const jwtService = require('../service/jwtService');
router.get('/getProducts', async (req, res) => {
  try {
    const products = await productsService.getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({
      message: 'Failed to retrieve products'
    });
  }
});
router.get("/reservations", async (req, res) => {
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

    const reservations = await productsService.getReservationsByUserId(userId);

    if (!reservations || reservations.length === 0) {
      return res.status(404).json({ message: "No reservations found." });
    }

    res.status(200).json(reservations[0].dataValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving reservations." });
  }
});
module.exports = router;
