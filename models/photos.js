module.exports = (sequelize, DataTypes) => {
    const Product = require("./product")(sequelize, DataTypes); // Import Product model

    // Define photos model
    const photos = sequelize.define('photos', {

        productID: {
            type: DataTypes.INTEGER,
            references: {
                model: Product, // Reference the imported Product model
                key: 'ID' // Foreign key in the Product table
            }
        },
        imagePath: {
            type: DataTypes.STRING
        }
    });

    return photos;
};