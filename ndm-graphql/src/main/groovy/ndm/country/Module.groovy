package ndm.country

import com.google.inject.AbstractModule
import com.google.inject.Scopes

/**
 * @since 0.1.0
 */
class Module extends AbstractModule {

  @Override
  protected void configure() {
    bind(Queries).in(Scopes.SINGLETON)
  }
}
