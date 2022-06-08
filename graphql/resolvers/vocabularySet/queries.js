import { vocabularyModel } from "../../../models/vocabularySet/vocabularyModel";
import { sequelize } from "../../../database"; 

const vocabularySetQueries = {

    vocabularySets: async function () {

        // Vocabulary Sets
        const vocabularySets = vocabularyModel(sequelize);
        await sequelize.sync();

        return await vocabularySets.findAll();
    }
    ,
    vocabularySet: async function (_, args) {

        // Vocabulary Sets
        const vocabularySet = vocabularyModel(sequelize);
        await sequelize.sync();

        return await vocabularySet.findOne({
            where: {
                name: args.name
            }
        });
    }
}

export default vocabularySetQueries