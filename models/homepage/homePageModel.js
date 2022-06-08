const { DataTypes } = require("sequelize")

const homePageModel = (sequelize) => {

    const homePageModel = sequelize.define('HomePage', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
    })
    return homePageModel

}

module.exports = {
    homePageModel
}