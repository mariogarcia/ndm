package ndm.country

import gql.DSL
import graphql.schema.GraphQLObjectType

/**
 * Defines all types related to {@link Country} fetching
 *
 * @since 0.1.0
 */
class Types {

  static final GraphQLObjectType WordFrequencyType = DSL.type('WordFrequency') {
    description 'Describes how often a word has been used'

    field 'word', GraphQLString
    field 'frequency', GraphQLBigInteger
  }

  static final GraphQLObjectType NewspaperType = DSL.type('Newspaper') {
    description 'Basic information about an online newspaper'

    field 'id', GraphQLString
    field 'name', GraphQLString
    field 'link', GraphQLString
  }

  static final GraphQLObjectType CountryType = DSL.type('Country') {
    description 'Returns statistical information about a given country'

    field 'id', GraphQLString
    field 'name', GraphQLString
    field 'noAuthors', GraphQLBigInteger
    field 'noNewspapers', GraphQLBigInteger
    field 'noArticles', GraphQLBigInteger
    field 'relevantWords', list(WordFrequencyType)
    field 'newspapers', list(NewspaperType)
  }
}
