module.exports = (sequelize, DataTypes) => {
    const User = require("./user")(sequelize, DataTypes); // Import User model
    const Product = require("./product")(sequelize, DataTypes); // Import Product model
    const ProductColors = require("./productColors")(sequelize, DataTypes);

    // Define Reservation model
    const Reservation = sequelize.define('reservation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User, // Reference the imported User model
                key: 'ID' // Foreign key in the User table
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: Product, // Reference the imported Product model
                key: 'ID' // Foreign key in the Product table
            }
        },
        colorID:{
            type: DataTypes.INTEGER,
            references: {
              model: ProductColors,
              key: "ID",
            },
        },
        status: {
            type: DataTypes.ENUM('new', 'confirmed', 'canceled')
        },
        date: {
            type: DataTypes.DATE
        }
    });

 Reservation.hasMany(Product)
 Product.belongsTo(Reservation)

    // Reservation.associate = (models) => {
    //     Reservation.belongsTo(models.User, { foreignKey: 'userId' }); // علاقة مع User
    //     Reservation.belongsTo(models.Product, { foreignKey: 'productId' }); // علاقة مع Product
    //     Reservation.belongsTo(models.ProductColors, { foreignKey: 'colorID' }); // علاقة مع ProductColors
    // };

    return Reservation;
};