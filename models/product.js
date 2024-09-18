module.exports = (sequelize, DataTypes) => {
    const Reservation =require("./reservation")
    const Product = sequelize.define('product', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        description: {
            type: DataTypes.TEXT
        }
    });

    return Product;
}
