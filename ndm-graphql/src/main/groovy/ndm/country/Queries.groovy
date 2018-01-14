package ndm.country

import gql.DSL
import graphql.schema.DataFetchingEnvironment
import graphql.schema.GraphQLFieldDefinition

import javax.inject.Inject

class Queries {

  GraphQLFieldDefinition findById() {
    return DSL.field('country') {
      description 'shows system current status'

      type Types.CountryType
      argument 'id', GraphQLBigInteger
      fetcher { DataFetchingEnvironment env ->
        return [mockedCountry, anotherMockedCountry].find { it.id == env.arguments.id }
      }
    }
  }


  GraphQLFieldDefinition listAll() {
    return DSL.field('countries') {
      description 'list all available countries'

      type list(Types.CountryType)
      fetcher { DataFetchingEnvironment env ->
        return [
          mockedCountry,
          anotherMockedCountry
        ]
      }
    }

  }

  Map getMockedCountry() {
    return [
      id: 1,
          name: 'Spain',
          noAuthors: 1230,
          noNewspapers: 2340,
          noArticles: 10232,
          newspapers: [
            [name: 'El Mundo', site: 'www.elmundo.es', relevantWords: []],
            [name: 'El Pais', site: 'www.elpais.com', relevantWords: []],
            [name: 'ABC', site: 'www.abc.es', relevantWords: []],
          ],
          relevantWords: [
            [word: 'A', frequency:3030],
            [word: 'B', frequency:2000]
          ]
    ]
  }

  Map getAnotherMockedCountry() {
    return [
      id: 2,
          name: 'France',
          noAuthors: 8230,
          noNewspapers: 5340,
          noArticles: 20232,
          newspapers: [
            [name: 'El Mundo', site: 'www.elmundo.es', relevantWords: []],
            [name: 'El Pais', site: 'www.elpais.com', relevantWords: []],
            [name: 'ABC', site: 'www.abc.es', relevantWords: []],
          ],
          relevantWords: [
            [word: 'A', frequency:3030],
            [word: 'B', frequency:2000]
          ]
    ]
  }

}
