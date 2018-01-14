package ndm.country

import com.google.inject.AbstractModule
import com.google.inject.Scopes

/**
 * @since 0.1.0
 */
class Module extends AbstractModule {

  @Override
  protected void configure() {
    bind(Service).in(Scopes.SINGLETON)
    bind(Queries).in(Scopes.SINGLETON)
  }
}
