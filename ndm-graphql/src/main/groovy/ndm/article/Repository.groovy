package ndm.article

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
   * @param countryId
   * @return
   * @since 0.1.0
   */
  Integer countByCountry(String countryId) {
    UUID uuid = UUID.fromString(countryId)
    String query = """
      SELECT
        count(*) as no
      FROM
        ndm.article as a
      JOIN ndm.newspaper as n ON
        a.newspaper_id = n.id
      WHERE
        n.country_id = ?
    """

    return sql.firstRow(query, uuid).no as Integer
  }

  List<Map> findAllByNewspaper(String newspaperId) {
    UUID uuid = UUID.fromString(newspaperId)

    return sql
      .rows('SELECT * FROM ndm.article WHERE newspaper_id = ?', uuid) as List<Map>
  }
}
