package ndm.country

import gql.DSL
import graphql.schema.GraphQLObjectType

/**
 * Defines all types related to {@link Country} fetching
 *
 * @since 0.1.0
 */
class Types {

  static final GraphQLObjectType CountryType = DSL.type('Country') {
    description 'Returns statistical information about a given country'

    field 'name', GraphQLString
    field 'noAuthors', GraphQLBigInteger
    field 'noNewspapers', GraphQLBigInteger
    field 'noArticles', GraphQLBigInteger
  }
}
