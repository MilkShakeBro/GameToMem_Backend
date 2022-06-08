const { DataTypes } = require("sequelize");

const vocabularySetModel = (sequelize) => {
    const vocabularySetModel = sequelize.define('VocabularySet', {
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
        },
    });
    return vocabularySetModel;
}

module.exports = {
    vocabularySetModel,
}