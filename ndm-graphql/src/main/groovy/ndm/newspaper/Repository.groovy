package ndm.newspaper

import groovy.sql.Sql
import javax.inject.Inject

/**
 * Service to deal with newspaper related queries
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
   * List all available newspapers in a given country
   *
   * @param id
   * @return a list of newspapers
   * @since 0.1.0
   */
  List<Map> findAllByCountry(String id) {
    return sql.rows("SELECT * FROM ndm.newspaper where country_id = ?", "$id") as List<Map>
  }

  /**
   * List all available newspapers in a given country
   *
   * @param id
   * @return how many newspapers belong to a country
   * @since 0.1.0
   */
  Integer countByCountry(String id) {
    UUID uuid = UUID.fromString(id)
    return sql
      .firstRow('SELECT count(*) as no FROM ndm.newspaper WHERE country_id = ?', uuid)
      .no as Integer
  }
}
