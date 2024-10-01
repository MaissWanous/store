const { product, classifications } = require("../models");
const { products } = require("../routes/products");


const { reservation, photos } = require('../models');
const productsService = {
  async getProducts() {
    try {
      const allProducts = await product.findAll();

      // Efficiently join classifications and photos using separate queries:
      const formattedProducts = await Promise.all(
        allProducts.map(async (product) => {
          const productClassifications = await classifications.findAll({
            where: { productID: product.ID },
            attributes: ["classification"], // Specify desired classification attributes
          });
          const productPhotos = await photos.findAll({
            where: { productID: product.ID },
            attributes: ["imagePath"], // Specify desired photo attributes
          });

          return {
            ID: product.ID,
            name: product.Name,
            price: product.price,
            description: product.description,
            classifications: productClassifications.map((classification) => classification.classification),
            photos: productPhotos.map((photo) => photo.imagePath),
          };
        })
      );

      return formattedProducts;
    } catch (error) {
      console.error("Error retrieving products:", error.message);
      // Handle the error appropriately, e.g., return an error response
      throw error; // Re-throw the error to allow callers to handle it
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
