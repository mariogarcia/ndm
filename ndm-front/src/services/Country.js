import axios from 'axios'

export let Country = {

    listAll: () => {
        var instance = axios.create({
            timeout: 1000,
            headers: {
                'Accept': 'application/json'
            }

        });
        const promise = instance
              .post('http://localhost:8888/graphql',
                    {
                           query: " \
                             { \
                               countries { \
                                 name \
                                 noNewspapers \
                                 noArticles \
                                 noAuthors \
                               } \
                             } \
                           ",

                    })

        return promise
    }

}
