const { product } = require("../models");
const { products } = require("../routes/products");


const { reservation, photos } = require('../models'); 
const productsService = {
  async getProducts() {
    try {
      const AllProducts = await product.findAll({
        attributes: ["Name", "price", "description"],
        include: [
          {
            model: classifications,
            attributes: ["classification"],
          },
          {
            model: photos,
            attributes: ["imagePath"],
          },
        ],
      });

      console.log(AllProducts);
    } catch (err) {
      throw err;
    }
  },

  async getReservationsByUserId(userId) {
    try {
      const reservations = await reservation.findAll({
        where: { userId: userId },
        include: [
          {
            model: product,
            attributes: ["Name", "price"],
            include: [
              {
                model: photos,
                attributes: ["imagePath"],
              },
            ],
          },
        ],
        attributes: ["date"],
      });

      return reservations;
    } catch (error) {
      throw new Error("Error retrieving reservations: " + error.message);
    }
  },
};

module.exports = productsService;
