import { homePageModel } from "../../../models/homepage/homePageModel"
import { articleInfo } from "../../../models/homepage/articleInfo"
import { vocabularySetInfo } from "../../../models/homepage/vocabularySetInfo"
import { themeInfo } from "../../../models/homepage/themeInfo"
import { sequelize } from "../../../database"

const homePageMutations = {
    createHomePageInfo: async (_, args) => {

        const homepageInfo = homePageModel(sequelize);
        const articleinfo = articleInfo(sequelize);
        const vocabularysetInfo = vocabularySetInfo(sequelize);
        const themeinfo = themeInfo(sequelize);

        homepageInfo.hasMany(articleinfo);
        homepageInfo.hasMany(vocabularysetInfo);
        homepageInfo.hasMany(themeinfo);

        await sequelize.sync()

        await homepageInfo.create(
            {
                articleInfos: [
                    {
                        image: args.homePageInfo.articleInfo[0].image,
                        name: args.homePageInfo.articleInfo[0].name
                    },
                    {
                        image: args.homePageInfo.articleInfo[1].image,
                        name: args.homePageInfo.articleInfo[1].name
                    },
                    
                ],
                vocabularySetInfos: [
                    {
                        image: args.homePageInfo.vocabularySetInfo[0].image,
                        name: args.homePageInfo.vocabularySetInfo[0].name
                    },
                    {
                        image: args.homePageInfo.vocabularySetInfo[1].image,
                        name: args.homePageInfo.vocabularySetInfo[1].name
                    },
                    
                ],
                themeInfos: [
                    {
                        image: args.homePageInfo.themeInfo[0].image,
                        name: args.homePageInfo.themeInfo[0].name
                    },
                    {
                        image: args.homePageInfo.themeInfo[1].image,
                        name: args.homePageInfo.themeInfo[1].name
                    },
                ],

            },
            {
                include: [
                    articleinfo,
                    vocabularysetInfo,
                    themeinfo
                ]
            }
        )

        return await homepageInfo.findAll()
    },
    updateHomePageInfo: async (_, args) => {

    },
    deleteHomePageInfo: async (_, args) => {

    }
}

export default homePageMutations