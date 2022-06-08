const { DataTypes } = require("sequelize");

const vocabularyModel = (sequelize) => {
    const vocabularyModel = sequelize.define('vocabulary', {
        id: {
            type: DataTypes.INTEGER,
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
        },
        breakpoint: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return vocabularyModel;
}

module.exports = {
    vocabularyModel,
}