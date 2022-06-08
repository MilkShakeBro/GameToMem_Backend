import { articleModel } from '../../../models/article/articleModel'
import { articleAnswerModel } from "../../../models/article/articleAnswerModel";
import { articleQuestionModel } from "../../../models/article/articleQuestionModel";
import { sequelize } from '../../../database'

const articleQueries = {
  articles: async () => {

    // Get the articles instance
    const articles = articleModel(sequelize);
    const articleAnswer = articleAnswerModel(sequelize);
    const articleQuestion = articleQuestionModel(sequelize);

    articles.hasMany(articleAnswer);
    articles.hasMany(articleQuestion);

    await sequelize.sync();

    const answer = await articles.findAll({
      include: [ articleAnswer, articleQuestion ]
    })
    console.log(answer)

    return await articles.findAll({
      include: [ articleAnswer, articleQuestion ]
    })
  },
  article: async (_, args) => {

    // Get the article instance
    const article = await articleModel(sequelize)
    const articleAnswer = articleAnswerModel(sequelize);
    const articleQuestion = articleQuestionModel(sequelize);

    article.hasMany(articleAnswer);
    article.hasMany(articleQuestion);

    await sequelize.sync();

    return await article.findOne(
      { 
        where: { 
          name: args.name 
        },
        include: [ articleAnswer, articleQuestion ]
      }
    )
  }
}

export default articleQueries
