import { articleModel } from '../../../models/article/articleModel'
import { sequelize } from '../../../database'

const articleQueries = {
  articles: async () => {

    // Get the articles instance
    const articles = articleModel(sequelize);
    await sequelize.sync();

    return await articles.findAll()
  },
  article: async (_, args) => {

    // Get the article instance
    const article = await articleModel(sequelize)
    await sequelize.sync();

    return await article.findOne({ where: { name: args.name } })
  }
}

export default articleQueries
