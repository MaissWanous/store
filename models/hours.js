module.exports = (sequelize, DataTypes) => {
  const hours = sequelize.define("hours", {
    startHour: {
      type: DataTypes.TIME,
    },
    endHour: {
      type: DataTypes.TIME,
    },
  });

  return hours;
};
