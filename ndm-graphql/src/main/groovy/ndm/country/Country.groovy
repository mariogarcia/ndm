package ndm.country

/**
 *
 * @since 0.1.0
 */
class Country {

  /**
   * @since 0.1.0
   */
  String name

  /**
   * @since 0.1.0
   */
  Integer noAuthors

  /**
   * @since 0.1.0
   */
  Integer noArticles

  /**
   * @since 0.1.0
   */
  Integer noNewspapers

  /**
   * @since 0.1.0
   */
  List<Newspaper> newspapers

  /**
   * @since 0.1.0
   */
  List<WordFrequency> relevantWords
}
