package ndm.country

import groovy.sql.Sql
import javax.inject.Inject
import graphql.schema.DataFetchingEnvironment

/**
 * Service to deal with country related queries
 *
 * @since 0.1.0
 */
class Service {

  /**
   * Country repository
   *
   * @since 0.1.0
   */
  @Inject
  Repository repository

  /**
   * List all available countries
   *
   * @param env
   * @return a list of countries
   * @since 0.1.0
   */
  List<Map> listAll(DataFetchingEnvironment env) {
    return repository.listAll()
  }

  /**
   * Shows how many countries are registered
   *
   * @param env GraphQL environment
   * @return total number of countries registered
   * @since 0.1.0
   */
  Integer count(DataFetchingEnvironment env) {
    return repository.count()
  }

  /**
   * Finds a country by its id
   *
   * @param env GraphQL environment
   * @return a country
   * @since 0.1.0
   */
  Map findById(DataFetchingEnvironment env) {
    return repository.findById("${env.arguments.id}")
  }

  /**
   * List latest relevant words for the current country
   *
   * @param env GraphQL environment
   * @return a list of word/frequency pairs
   * @since 0.1.0
   */
  List<Map> findAllRelevantWords(DataFetchingEnvironment env) {
    Map source = env.source
    Map words = repository.findAllRelevantWords("${source.id}")

    return words
      .collect { k, v ->
        [value: k, count: v]
      } as List<Map>
  }
}
