package ndm.graphql

import static gql.DSL.mergeSchemas

import graphql.schema.GraphQLSchema

import javax.inject.Inject
import javax.inject.Provider

import ndm.country.Service as CountryService
import ndm.newspaper.Service as NewspaperService
import ndm.article.Service as ArticleService
import ndm.author.Service as AuthorService

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

  @Inject
  ArticleService articleService

  @Inject
  AuthorService authorService

  @Override
  GraphQLSchema get() {
    return mergeSchemas {
      byResource('graphql/Common.graphql')
      byResource('graphql/Newspaper.graphql')
      byResource('graphql/Country.graphql') {
        mapType('Country') {
          link('newspapers', newspaperService.&findAllByCountry)
          link('noNewspapers', newspaperService.&countByCountry)
          link('noAuthors', authorService.&countByCountry)
          link('noArticles', articleService.&countByCountry)
          link('relevantWords', countryService.&findAllRelevantWords)
        }
        mapType('CountryStats') {
          link('count', countryService.&count)
          link('overtime', countryService.&findAllCountOvertime)
        }
      }
      byResource('graphql/Schema.graphql') {
        mapType('Query') {
          link('countries', countryService.&listAll)
          link('country', countryService.&findById)
          link('countryStats') { env -> [:] }
        }
      }
    }
  }
}
