module.exports = (sequelize, DataTypes) => {
  const location = require("./location")(sequelize, DataTypes); // Import location model
  const reservation = require("./reservation")(sequelize, DataTypes); // Import reservation model
  const delivery_info = sequelize.define("delivery_info", {
    reservationID: {
      type: DataTypes.INTEGER,
      references: {
        model: reservation, // Reference the imported reservation model
        key: "id", // Foreign key in the reservation table
      },
    },
    locationID: {
      type: DataTypes.INTEGER,
      references: {
        model: location, // Reference the imported location model
        key: "locationID", // Foreign key in the location table
      },
    },
    hour: {
      type: DataTypes.TIME,
    },

    date: {
      type: DataTypes.DATE,
    },
  });

  return delivery_info;
};
