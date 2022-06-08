const { DataTypes } = require("sequelize");

const themeModel = (sequelize) => {
    const themeModel = sequelize.define('Theme', {
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
    return themeModel
}

module.exports = {
    themeModel
}