package ndm.graphql

import static gql.DSL.mergeSchemas

import graphql.schema.GraphQLSchema

import javax.inject.Inject
import javax.inject.Provider

import ndm.country.Service as CountryService
import ndm.newspaper.Service as NewspaperService

/**
 * Provides a singleton instance of the {@link GraphQLSchema} type
 *
 * @since 0.1.0
 */
class SchemaProvider implements Provider<GraphQLSchema> {

  @Inject
  CountryService countryService

  @Inject
  NewspaperService newspaperService

  @Override
  GraphQLSchema get() {
    return mergeSchemas {
      byResource('graphql/Common.graphql')
      byResource('graphql/Newspaper.graphql')
      byResource('graphql/Country.graphql') {
        mapType('Country') {
          link('newspapers', newspaperService.&findAllByCountry)
          link('noNewspapers', newspaperService.&countByCountry)
          link('noAuthors') { env -> 0 }
          link('noArticles') { env -> 0 }
        }
      }
      byResource('graphql/Schema.graphql') {
        mapType('Query') {
          link('countries', countryService.&listAll)
          link('country', countryService.&findById)
        }
      }
    }
  }
}
