const { product } = require("../models");
const { products } = require("../routes/products");
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
};
module.exports = productsService;
