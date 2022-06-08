import { vocabularySetModel } from '../../../models/vocabularySet/vocabularySetModel'
import { vocabularyModel } from "../../../models/vocabularySet/vocabularyModel";
import { sequelize } from "../../../database"; 

const vocabularySetQueries = {

    vocabularySets: async function () {

        const vocabularySets = vocabularySetModel(sequelize);
        const vocabulary = vocabularyModel(sequelize);

        vocabularySets.hasMany(vocabulary);

        await sequelize.sync();

        return await vocabularySets.findAll({
            include: [ vocabulary ]
        });
    }
    ,
    vocabularySet: async function (_, args) {

        const vocabularySet = vocabularySetModel(sequelize);
        const vocabulary = vocabularyModel(sequelize);

        vocabularySet.hasMany(vocabulary);

        return await vocabularySet.findOne({
            where: {
                name: args.name
            },
            include: [ vocabulary ]
        });
    }
}

export default vocabularySetQueries