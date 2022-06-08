const { DataTypes } = require("sequelize");

const personalModel = (sequelize) => {
    const personalModel = sequelize.define('Personal', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return personalModel
}

module.exports = {
    personalModel
}