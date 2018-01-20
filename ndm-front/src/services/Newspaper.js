import { Rest } from './Rest'
import { Config } from '../config/app'

export let Newspaper = {

    findById: (id) => {
        return Rest
            .post(Config.GRAPHQL_API, {
                query: `{ \
                    newspaper (id: "${id}") { \
                       name \
                       link \
                       articles { \
                         title \
                         category \
                         published \
                       } \
                    }
                }`
            }).then((response) => response.data.data)
            .catch((err) => console.log(err))
    }
}
