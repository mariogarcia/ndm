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

  Integer count(DataFetchingEnvironment env) {
    return repository.count()
  }

  /**
   * Finds a country by its id
   *
   * @param env
   * @return a country
   * @since 0.1.0
   */
  Map findById(DataFetchingEnvironment env) {
    return repository.findById("${env.arguments.id}")
  }
}
