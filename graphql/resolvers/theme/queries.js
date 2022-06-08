import { themeModel } from "../../../models/theme/themeModel" 
import { vocabulary } from "../../../models/theme/vocabulary"
import { coordinate } from "../../../models/theme/coordinate"
import { sequelize } from "../../../database"

const themeQueries = {
    themes: async () => {

        const themes = themeModel(sequelize)
        await sequelize.sync()

        return await themes.findAll()

    },
    theme: async (_, args) => {

        const theme = themeModel(sequelize)
        await sequelize.sync()

        return await theme.findOne({
            where: {
                name: args.name
            }
        })

    }
}

export default themeQueries
