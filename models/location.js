module.exports = (sequelize, DataTypes) => {
 
    const location= sequelize.define('location', {
        locationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        location: {
            type: DataTypes.STRING(250)

        },
        cost: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
      
    });

    return location;

}