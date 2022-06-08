const { DataTypes } = require("sequelize")

const vocabularySetInfo = (sequelize) => {

    const vocabularySetInfo = sequelize.define('vocabularySetInfo', {
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
    return vocabularySetInfo;

}

module.exports = {
    vocabularySetInfo
}