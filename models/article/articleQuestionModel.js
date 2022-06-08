const { Model, DataTypes, Deferrable } = require("sequelize");


const articleQuestionModel = (sequelize) => {
  const articleQuestionModel = sequelize.define('question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question_id: {
        type: DataTypes.INTEGER,
    },
    question_string: {
        type: DataTypes.JSON,
    },
  });
  return articleQuestionModel;
}

module.exports = {
    articleQuestionModel,
}