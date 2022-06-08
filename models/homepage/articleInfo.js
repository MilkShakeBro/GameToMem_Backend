const { DataTypes } = require("sequelize")

const articleInfo = (sequelize) => {

    const articleInfo = sequelize.define('articleInfo', {
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
    return articleInfo;

}

module.exports = {
    articleInfo
}