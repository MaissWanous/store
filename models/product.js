
module.exports = (sequelize, DataTypes) => {
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

    Product.associate = (models) => {
        Product.hasMany(models.classification, { foreignKey: 'productID' });
        Product.hasMany(models.photos, { foreignKey: 'productID' });
    };

    return Product;
};