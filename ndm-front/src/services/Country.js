import { Rest } from './Rest'
import { Config } from '../config/app'

export let Country = {

    listAll: () => {
        return Rest
              .post(Config.GRAPHQL_API, {
                  query: "{ \
                    countryStats { \
                      count \
                      overtime { \
                        published \
                        count \
                      } \
                    } \
                    countries { \
                      id \
                      published \
                      name \
                      noNewspapers \
                      noArticles \
                      noAuthors \
                    } \
                  }",
              })
    },

    findById: (id) => {
        return Rest
            .post(Config.GRAPHQL_API, {
                query: `{ \
                  country(id: "${id}") { \
                    id \
                    name \
                    noNewspapers \
                    noArticles \
                    noAuthors \
                    relevantWords { \
                      value \
                      count \
                    } \
                    newspapers { \
                       id \
                       published \
                       name \
                       link \
                    } \
                  } \
                }`
            }).then((response) => response.data.data)
            .catch((err) => console.log(err))
    }
}
