
module.exports = (sequelize, DataTypes) => {
    const Product = require("./product")(sequelize, DataTypes); // Import Product model

    // Define classifications model
    const classifications = sequelize.define('classifications', {

        productID: {
            type: DataTypes.INTEGER,
            references: {
                model: Product,
                key: 'ID'
            }
        },
        classification: {
            type: DataTypes.STRING
        }
    });
    Product.hasMany(classifications,{ foreignKey: 'productID' })
    classifications.belongsTo(Product)
    return classifications;
};