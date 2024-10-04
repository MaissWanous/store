
const { product, classifications } = require("../models");
const { reservation, photos,productColors } = require('../models');

;

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
        where: { userId },
      });
  
      const formattedReservations = await Promise.all(reservations.map(async (reservation) => {
        let produc = null;
        let phot = []; 
  
      
        if (reservation.productId) {
          console.log("Reservation ID:", reservation.id);
          console.log("Product ID:", reservation.productId); 
  
          try {
            produc = await product.findOne({
              where: { ID: reservation.productId },
              attributes: ["Name", "price", "ID"], 
            });
  
            if (produc) {
              console.log("Product ID:", produc.dataValues.ID); 
            } else {
              console.warn("No product found for reservation", reservation.id);
            }
          } catch (error) {
            console.warn("Product not found for reservation", reservation.id);
          }
        }
  
        if (produc) { 
          phot = await photos.findAll({
            where: { productID: produc.dataValues.ID },
            attributes: ["imagePath"],
          });
        } else {
          console.warn("No product found for reservation", reservation.id);
        }
  
        return {
          ...reservation.dataValues,
          price: produc ? produc.dataValues.price : null,
          name: produc ? produc.dataValues.Name : null,
          photos: phot.map((photo) => photo.imagePath),
        };
      }));
  
      return formattedReservations; 
    } catch (error) {
      throw new Error("Error retrieving reservations: " + error.message);
    }
  },
  async getProductDetailsById(productId) {
    try {
     
      const productDetails = await product.findOne({
        where: { ID: productId },
      });
  
      if (!productDetails) {
        throw new Error("Product not found");
      }
  
      
      const productPhotos = await photos.findAll({
        where: { productID: productId },
        attributes: ["imagePath"],
      });
  
      
      const colorsPromises = productPhotos.map(async (photo) => {
        const colors = await productColors.findAll({
          where: { ID: photos.colorID }, 
          attributes: ["Name", "number"],
        });
        return {
          imagePath: productPhotos.imagePath,
          colors: colors.map(color => ({
            name: color.Name,
            quantity: color.number,
          })),
        };
      });
  
      const photosWithColors = await Promise.all(colorsPromises);
  
      
      const formattedProductDetails = {
        ID: productDetails.ID,
        name: productDetails.Name,
        price: productDetails.price,
        description: productDetails.description,
        photos: photosWithColors,
      };
  
      return formattedProductDetails;
    } catch (error) {
      console.error("Error retrieving product details:", error.message);
      throw new Error("Error retrieving product details: " + error.message);
    }
  }
  
};

module.exports = productsService;
