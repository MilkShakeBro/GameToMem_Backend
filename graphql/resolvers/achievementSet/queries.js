import { achievementSetModel } from "../../../models/achievementSet/achievementSetModel";
import { sequelize } from "../../../database"

const achievementSetQueries = {
    achievementSets: async function () {

        const achievements = achievementSetModel(sequelize);
        await achievements.sync();

        return await achievements.findAll();

    },
    achievementSet: async function (_, args) {
        
        const achievement = achievementSetModel(sequelize);
        await achievement.sync();

        return await achievement.findOne({
            where: {
                name: args.name
            }
        });
    }
}
export default achievementSetQueries