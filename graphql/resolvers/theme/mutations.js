import { themeModel } from "../../../models/theme/themeModel"
import { vocabulary } from "../../../models/theme/vocabulary"
import { coordinate } from "../../../models/theme/coordinate"
import { sequelize } from "../../../database"

const themeMutations = {
    createTheme: async (_, args) => {

        const theme = themeModel(sequelize)
        const vocabulary_model = vocabulary(sequelize)
        const coordinate_model = coordinate(sequelize)

        theme.hasMany(vocabulary_model)
        vocabulary_model.belongsTo(coordinate_model)

        await sequelize.sync()

        await theme.create({
            name: args.theme.name,
            image: args.theme.image,
            flashcards: [
                {
                    word: args.theme.flashcards[0].word,
                    chinese: args.theme.flashcards[0].chinese,
                    coordinate: {
                        x: args.theme.flashcards[0].coordinate.x,
                        y: args.theme.flashcards[0].coordinate.y
                    }
                }
            ]
        },
        {
            include: [
                {
                    model: vocabulary_model,
                    include: [coordinate_model]
                }
            ]
        })

        return await theme.findOne({
            where: {
                name: args.theme.name
            }
        })

    },
    updateTheme: async (_, args) => {

    },
    deleteTheme: async (_, args) => {

    }
}

export default themeMutations