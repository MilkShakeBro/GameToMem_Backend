const { DataTypes } = require("sequelize");

const articleModel = (sequelize) => {
  const articleModel = sequelize.define('Article', {
    // Name, Theme, Character, os
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(3000),
    }
  });

  return articleModel;
}

module.exports = {
  articleModel,
}