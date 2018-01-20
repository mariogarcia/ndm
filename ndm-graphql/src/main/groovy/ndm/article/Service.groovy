package ndm.article

import groovy.sql.Sql
import javax.inject.Inject
import graphql.schema.DataFetchingEnvironment

/**
 * Service to deal with article related queries
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
    Map source = env.source // Country

    return repository.countByCountry("${source.id}")
  }

  List<Map> findAllByNewspaper(DataFetchingEnvironment env) {
    Map source = env.source // Newspaper

    return repository.findAllByNewspaper("${source.id}")
  }
}
