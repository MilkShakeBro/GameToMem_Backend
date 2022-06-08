import { vocabularySetModel } from '../../../models/vocabularySet/vocabularySetModel'
import { vocabularyModel } from '../../../models/vocabularySet/vocabularyModel'
import { sequelize } from '../../../database'

const vocabularySetMutations = {
    createVocabularySet: async (_, args) => {

        const vocabularySet = vocabularySetModel(sequelize);
        const vocabulary = vocabularyModel(sequelize);

        vocabularySet.hasMany(vocabulary);

        await sequelize.sync();

        await vocabularySet.create(
            {
                name: args.vocabularySet.name,
                image: args.vocabularySet.image,
                vocabularies: [
                    {
                        id: args.vocabularySet.vocabularySet[0].id,
                        word: args.vocabularySet.vocabularySet[0].word,
                        chinese: args.vocabularySet.vocabularySet[0].chinese,
                        breakpoint: args.vocabularySet.vocabularySet[0].breakpoint,
                    },
                    {
                        id: args.vocabularySet.vocabularySet[1].id,
                        word: args.vocabularySet.vocabularySet[1].word,
                        chinese: args.vocabularySet.vocabularySet[1].chinese,
                        breakpoint: args.vocabularySet.vocabularySet[1].breakpoint,
                    },
                    {
                        id: args.vocabularySet.vocabularySet[2].id,
                        word: args.vocabularySet.vocabularySet[2].word,
                        chinese: args.vocabularySet.vocabularySet[2].chinese,
                        breakpoint: args.vocabularySet.vocabularySet[2].breakpoint,
                    },
                ]
            },
            {
                include: [ vocabulary ]
            }
        )

        return await vocabularySet.findOne({
            where: {
                name: args.vocabularySet.name
            }
        })
    },
    updateVocabularySet: {

    },
    deleteVocabularySet: {

    }
}

export default vocabularySetMutations