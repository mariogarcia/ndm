package ndm.author

import groovy.sql.Sql
import javax.inject.Inject
import graphql.schema.DataFetchingEnvironment

/**
 * Service to deal with authors related queries
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
   * @param env
   * @return
   * @since 0.1.0
   */
  Integer countByCountry(DataFetchingEnvironment env) {
    Map source = env.source

    return repository.countByCountry("${source.id}")
  }
}
