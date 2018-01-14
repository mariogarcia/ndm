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
  @Inject Sql sql

  /**
   * List all available newspapers in a given country
   *
   * @param env
   * @return a list of newspapers
   * @since 0.1.0
   */
  List<Map> findAllByCountry(DataFetchingEnvironment env) {
    return sql.rows("SELECT * FROM ndm.newspaper where country_id = ?", "${env.arguments.id}") as List<Map>
  }

  Integer countByCountry(DataFetchingEnvironment env) {
    return sql.firstRow("""
      SELECT
        count(*)
      FROM ndm.newspaper WHERE
        country_id = ?
      """, "${env.arguments.id}") as Integer
  }
}
