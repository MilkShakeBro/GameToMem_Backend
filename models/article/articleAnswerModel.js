const { Model, DataTypes, Deferrable } = require("sequelize");


const articleAnswerModel = (sequelize) => {
  const articleAnswerModel = sequelize.define('answer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    answer_id: {
        type: DataTypes.INTEGER,
    },
    answer_string: {
        type: DataTypes.STRING,
    },
  });
  return articleAnswerModel;
}

module.exports = {
    articleAnswerModel,
}