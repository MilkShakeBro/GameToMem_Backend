const { DataTypes } = require("sequelize")

const themeInfo = (sequelize) => {

    const themeInfo = sequelize.define('themeInfo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return themeInfo;

}

module.exports = {
    themeInfo
}