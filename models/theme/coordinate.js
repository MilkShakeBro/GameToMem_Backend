const { DataTypes } = require("sequelize")

const coordinate = (sequelize) => {
    const coordinate = sequelize.define('coordinate', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        x: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        y: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    })
    return coordinate
}

module.exports = {
    coordinate
}