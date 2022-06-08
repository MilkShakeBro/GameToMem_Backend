import { achievementSetModel } from "../../../models/achievementSet/achievementSetModel"
import { sequelize } from "../../../database"

const achievementSetMutations = {
    createAchievementSet: async (_, args) => {

        const achievement = achievementSetModel(sequelize);

        await achievement.sync();

        await achievement.create({
            name: args.achievement.name,
            image: args.achievement.image,
            description: args.achievement.description,
            obtained: args.achievement.obtained
        });

        return await achievement.findOne({
            where: {
                name: args.achievement.name
            }
        });
    },
    updateAchievementSet: async (_, args) => {

    },
    deleteAchievementSet: async (_, args) => {

    }
}

export default achievementSetMutations;