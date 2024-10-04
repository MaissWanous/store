module.exports = (sequelize, DataTypes) => {
  const ProductColors = sequelize.define("productColors", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING(200),
    },

    number: {
      type: DataTypes.INTEGER,
    },
  });


  return ProductColors;
};
