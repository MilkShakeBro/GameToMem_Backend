const { DataTypes } = require("sequelize");

const vocabulary = (sequelize) => {
    const vocabulary = sequelize.define('flashcard', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chinese: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return vocabulary
}

module.exports = {
    vocabulary
}