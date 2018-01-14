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
            [id: 1, name: 'El Mundo', link: 'http://www.elmundo.es', relevantWords: []],
            [id: 2, name: 'El Pais', link: 'http://www.elpais.com', relevantWords: []],
            [id: 3, name: 'ABC', link: 'http://www.abc.es', relevantWords: []],
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
            [id: 4, name: 'France Soir', link: 'http://www.francesoir.fr', relevantWords: []],
            [id: 5, name: 'Le Figaro', link: 'http://plus.lefigaro.fr/cercle/le-figaro-in-english/', relevantWords: []],
          ],
          relevantWords: [
            [word: 'A', frequency:3030],
            [word: 'B', frequency:2000]
          ]
    ]
  }

}
