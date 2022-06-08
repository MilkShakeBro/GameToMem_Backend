import { homePageModel } from "../../../models/homepage/homePageModel"
import { articleInfo } from "../../../models/homepage/articleInfo"
import { vocabularySetInfo } from "../../../models/homepage/vocabularySetInfo"
import { themeInfo } from "../../../models/homepage/themeInfo"
import { sequelize } from "../../../database"

const homePageQueries = {
    homePageInfos: async () => {

        const homePageInfos = homePageModel(sequelize)
        await homePageInfos.sync()

        return await homePageInfos.findAll()

    },
    homePageInfo: async (_, args) => {

        const homePageInfo = homePageModel(sequelize)
        await homePageInfo.sync()

        return await homePageInfo.findOne({
            where: {
                name: args.name
            }
        })
    }
}
export default homePageQueries