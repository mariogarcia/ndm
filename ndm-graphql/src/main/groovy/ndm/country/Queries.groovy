package ndm.country

import gql.DSL
import graphql.schema.DataFetchingEnvironment
import graphql.schema.GraphQLFieldDefinition

import javax.inject.Inject

class Queries {

  GraphQLFieldDefinition getCountry() {
    return DSL.field('country') {
      description 'shows system current status'

      type Types.CountryType
      fetcher { DataFetchingEnvironment env ->
        return [
          name: 'Spain',
          noAuthors: 123,
          noNewspapers: 234,
          noArticles: 10232,
          newspapers: [
            [name: 'El Mundo', site: 'www.elmundo.es', relevantWords: []]
          ],
          relevantWords: [
            [word: 'A', frequency:3030],
            [word: 'B', frequency:2000]
          ]
        ]
      }
    }
  }
}
