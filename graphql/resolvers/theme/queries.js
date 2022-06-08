import { themeModel } from "../../../models/theme/themeModel" 
import { vocabulary } from "../../../models/theme/vocabulary"
import { coordinate } from "../../../models/theme/coordinate"
import { sequelize } from "../../../database"

const themeQueries = {
    themes: async () => {

        const themes = themeModel(sequelize)
        const vocabulary_model = vocabulary(sequelize)
        const coordinate_model = coordinate(sequelize)

        themes.hasMany(vocabulary_model)
        vocabulary_model.belongsTo(coordinate_model)

        await sequelize.sync()

        return await themes.findAll({
            include: [
                {
                    model: vocabulary_model,
                    include: [coordinate_model]
                }
            ]
        })

    },
    theme: async (_, args) => {

        const theme = themeModel(sequelize)
        const vocabulary_model = vocabulary(sequelize)
        const coordinate_model = coordinate(sequelize)

        theme.hasMany(vocabulary_model)
        vocabulary_model.belongsTo(coordinate_model)

        await sequelize.sync()

        return await theme.findOne({
            where: {
                name: args.name
            },
            include: [
                {
                    model: vocabulary_model,
                    include: [coordinate_model]
                }
            ]
        })

    }
}

export default themeQueries
