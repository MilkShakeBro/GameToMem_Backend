import { articleModel } from '../../../models/article/articleModel'
import { articleAnswerModel } from "../../../models/article/articleAnswerModel";
import { articleQuestionModel } from "../../../models/article/articleQuestionModel";
import { sequelize } from '../../../database'

const articleMutations = {
  createArticle: async (_, args) => {

    // Get the article instance
    const article = articleModel(sequelize);
    const articleAnswer = articleAnswerModel(sequelize);
    const articleQuestion = articleQuestionModel(sequelize);

    article.hasMany(articleAnswer);
    article.hasMany(articleQuestion);

    await sequelize.sync();

    await article.create(
      {
        name: args.article.name,
        image: args.article.image,
        answers: [
          {
            answer_id: args.article.answer[0].id,
            answer_string: args.article.answer[0].answer
          },
          {
            answer_id: args.article.answer[1].id,
            answer_string: args.article.answer[1].answer
          },
          {
            answer_id: args.article.answer[2].id,
            answer_string: args.article.answer[2].answer
          },
          {
            answer_id: args.article.answer[3].id,
            answer_string: args.article.answer[3].answer
          },
        ],
        questions: [
          {
            question_id: args.article.question[0].id,
            question_string: args.article.question[0].questions
          },
          {
            question_id: args.article.question[1].id,
            question_string: args.article.question[1].questions
          },
          {
            question_id: args.article.question[2].id,
            question_string: args.article.question[2].questions
          },
          {
            question_id: args.article.question[3].id,
            question_string: args.article.question[3].questions
          },
          {
            question_id: args.article.question[4].id,
            question_string: args.article.question[4].questions
          },
        ],
        content: args.article.content
      },
      {
        include: [
          articleAnswer,
          articleQuestion
        ]
      }
    );

    return await article.findOne({
      where: {
        name: args.article.name
      }
    })
  },
  updateArticle: async (_, args) => {

    // Get the article instance
    const article = articleModel(sequelize);
    await sequelize.sync();

    const update_article = await article.findOne({
      where: {
        name: args.name
      }
    })

    update_article.update({
      name: args.update_content.name,
      image: args.update_content.image,
      answer: args.update_content.answer,
      question: args.update_content.question,
      content: args.update_content.content,
    })

    await update_article.save();

    return update_article
  },
  deleteArticle: async (_, args) => {
    const article = articleModel(sequelize);
    await sequelize.sync();

    await article.destroy({
      where: {
        name: args.name
      }
    })

    return await article.findAll()
  },

}

export default articleMutations
