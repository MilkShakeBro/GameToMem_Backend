import { personalModel } from "../../../models/personal/personalModel"
import { sequelize } from "../../../database"

const personalInfoQueries = {
    personalInfos: async (_, args) => {

        const personInfos = personalModel(sequelize)
        await personInfos.sync()

        return await personInfos.findAll();

    },
    personalInfo: async (_, args) => {

        const personInfo = personalModel(sequelize)
        await personInfo.sync()

        return await personInfo.findOne({
            where: {
                name: args.name
            }
        });

    }
}

export default personalInfoQueries