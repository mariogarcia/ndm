package ndm.newspaper

import groovy.sql.Sql
import javax.inject.Inject
import graphql.schema.DataFetchingEnvironment

/**
 * Service to deal with newspaper related queries
 *
 * @since 0.1.0
 */
class Service {

  /**
   * {@link Sql} instance
   *
   * @since 0.1.0
   */
  @Inject Repository repository

  /**
   * List all available newspapers in a given country
   *
   * @param env
   * @return a list of newspapers
   * @since 0.1.0
   */
  List<Map> findAllByCountry(DataFetchingEnvironment env) {
    Map source = env.source

    return repository.findAllByCountry("${source.id}")
  }

  /**
   * List all available newspapers in a given country
   *
   * @param env
   * @return how many newspapers belong to a country
   * @since 0.1.0
   */
  Integer countByCountry(DataFetchingEnvironment env) {
    Map source = env.source

    return repository.countByCountry("${source.id}")
  }

  Map findById(DataFetchingEnvironment env) {
    return repository.findById("${env.arguments.id}")
  }
}
