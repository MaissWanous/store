module.exports = (sequelize, DataTypes) => {
    const Product = require("./product")(sequelize, DataTypes); // Import Product model
    const sales= sequelize.define('sales', {
        productID: {
            type: DataTypes.INTEGER,
            references: {
                model: Product, // Reference the imported Product model
                key: 'ID' // Foreign key in the Product table
            }
        },
        Name: {
            type: DataTypes.STRING(200)

        },
        price: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        }
    });
    Product.hasMany(sales)
    sales.belongsTo(Product)
    return sales;

}
