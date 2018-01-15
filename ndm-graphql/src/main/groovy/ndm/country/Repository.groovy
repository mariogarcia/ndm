package ndm.country

import groovy.sql.Sql
import javax.inject.Inject

/**
 * Service to deal with country related queries
 *
 * @since 0.1.0
 */
class Repository {

  /**
   * {@link Sql} instance
   *
   * @since 0.1.0
   */
  @Inject Sql sql

  /**
   * List all available countries
   *
   * @return a list of countries
   * @since 0.1.0
   */
  List<Map> listAll() {
    return sql.rows('SELECT * FROM ndm.country') as List<Map>
  }

  /**
   * Finds a country by its id
   *
   * @param id
   * @return a country
   * @since 0.1.0
   */
  Map findById(String id) {
    return sql.firstRow('SELECT * FROM ndm.country where id = ?', id) as Map
  }
}