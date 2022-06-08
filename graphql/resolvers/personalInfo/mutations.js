import { personalModel } from "../../../models/personal/personalModel"
import { sequelize } from "../../../database"

const personalInfoQueries = {
    createPersonInfo: async (_, args) => {

        const personalInfo = personalModel(sequelize)
        await personalInfo.sync()

        await personalInfo.create({
            name: args.personInfo.name
        })

        return await personalInfo.findOne({
            where: {
                name: args.personInfo.name
            }
        })
    },
    updatePersonInfo: async (_, args) => {

    },
    deletePersonInfo: async (_, args) => {

    },
}

export default personalInfoQueries