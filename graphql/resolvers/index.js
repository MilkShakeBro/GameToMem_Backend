import { versionQueries } from './version'
import { articleQueries, articleMutations } from './article'
import { vocabularySetQueries, vocabularySetMutations } from './vocabularyset'
import { achievementSetQueries, achievementSetMutations } from './achievementSet'
import { themeQueries, themeMutations } from './theme'
import { homePageQueries, homePageMutations } from './homepage'
import { personalInfoQueries, personalInfoMutations } from './personalInfo'

const resolvers = {
  Query: {
    ...versionQueries,
    ...articleQueries,
    ...vocabularySetQueries,
    ...achievementSetQueries,
    ...themeQueries,
    ...homePageQueries,
    ...personalInfoQueries,
  },
  Mutation: {
    ...articleMutations,
    ...vocabularySetMutations,
    ...achievementSetMutations,
    ...themeMutations,
    ...homePageMutations,
    ...personalInfoMutations,
  }
}

export default resolvers
