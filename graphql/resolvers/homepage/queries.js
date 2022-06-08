import { homePageModel } from "../../../models/homepage/homePageModel"
import { articleInfo } from "../../../models/homepage/articleInfo"
import { vocabularySetInfo } from "../../../models/homepage/vocabularySetInfo"
import { themeInfo } from "../../../models/homepage/themeInfo"
import { sequelize } from "../../../database"

const homePageQueries = {
    homePageInfos: async () => {

        const homepageInfos = homePageModel(sequelize);
        const articleinfo = articleInfo(sequelize);
        const vocabularysetInfo = vocabularySetInfo(sequelize);
        const themeinfo = themeInfo(sequelize);

        homepageInfos.hasMany(articleinfo);
        homepageInfos.hasMany(vocabularysetInfo);
        homepageInfos.hasMany(themeinfo);

        await sequelize.sync()

        return await homepageInfos.findAll({
            include: [
                articleinfo,
                vocabularysetInfo,
                themeinfo
            ]
        })

    },
    homePageInfo: async (_, args) => {

        const homepageInfo = homePageModel(sequelize);
        const articleinfo = articleInfo(sequelize);
        const vocabularysetInfo = vocabularySetInfo(sequelize);
        const themeinfo = themeInfo(sequelize);

        homepageInfo.hasMany(articleinfo);
        homepageInfo.hasMany(vocabularysetInfo);
        homepageInfo.hasMany(themeinfo);

        return await homepageInfo.findOne({
            where: {
                id: args.id
            },
            include: [
                articleinfo,
                vocabularysetInfo,
                themeinfo
            ]
        })
    }
}
export default homePageQueries