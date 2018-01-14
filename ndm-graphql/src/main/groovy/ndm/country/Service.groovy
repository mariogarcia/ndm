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
   * {@link Sql} instance
   *
   * @since 0.1.0
   */
  @Inject Sql sql

  /**
   * List all available countries
   *
   * @param env
   * @return a list of countries
   * @since 0.1.0
   */
  List<Map> listAll(DataFetchingEnvironment env) {
    return sql.rows(/SELECT * FROM ndm.country/) as List<Map>
  }

  /**
   * Finds a country by its id
   *
   * @param env
   * @return a country
   * @since 0.1.0
   */
  Map findById(DataFetchingEnvironment env) {
    return sql.firstRow(/SELECT * FROM ndm.country where id = ?/, env.arguments.id)
  }
}
