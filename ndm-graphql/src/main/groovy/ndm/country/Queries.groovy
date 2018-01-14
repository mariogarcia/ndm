package ndm.country

import gql.DSL
import graphql.schema.DataFetchingEnvironment
import graphql.schema.GraphQLFieldDefinition

import javax.inject.Inject

/**
 * Queries related to countries
 *
 * @since 0.1.0
 */
class Queries {

  @Inject
  Service service

  /**
   * Query to find countries by id
   *
   * @return a {@link GraphQLFieldDefinition}
   * @since 0.1.0
   */
  GraphQLFieldDefinition findById() {
    return DSL.field('country') {
      description 'shows system current status'

      type Types.CountryType
      argument 'id', GraphQLBigInteger
      fetcher { DataFetchingEnvironment env ->
        return service.findById("${env.arguments.id}")
      }
    }
  }

  /**
   * Query to list all available countries
   *
   * @return a {@link GraphQLFieldDefinition}
   * @since 0.1.0
   */
  GraphQLFieldDefinition listAll() {
    return DSL.field('countries') {
      description 'list all available countries'

      type list(Types.CountryType)
      fetcher { DataFetchingEnvironment env ->
        return service.listAll()
      }
    }
  }
}
