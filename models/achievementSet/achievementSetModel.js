const { DataTypes } = require("sequelize");

const achievementSetModel = (sequelize) => {
    const achievementSetModel = sequelize.define('AchievementSet', {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        obtained: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return achievementSetModel;
}

module.exports = {
    achievementSetModel
}