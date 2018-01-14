import axios from 'axios'

import { Config } from '../config/app'

const INSTANCE = axios.create({
    timeout: 1000,
    headers: {
        'Accept': 'application/json'
    }
});

export let Country = {

    listAll: () => {
        return INSTANCE
              .post(Config.GRAPHQL_API, {
                  query: "{ \
                    countries { \
                      id \
                      name \
                      noNewspapers \
                      noArticles \
                      noAuthors \
                    } \
                  }",
              })
    },

    findById: (id) => {
        return INSTANCE
            .post(Config.GRAPHQL_API, {
                query: ""
            })
    }
}
