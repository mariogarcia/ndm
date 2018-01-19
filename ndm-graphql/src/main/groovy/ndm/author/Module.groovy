package ndm.author

import com.google.inject.AbstractModule
import com.google.inject.Scopes

/**
 * @since 0.1.0
 */
class Module extends AbstractModule {

  @Override
  protected void configure() {
    bind(Repository).in(Scopes.SINGLETON)
    bind(Service).in(Scopes.SINGLETON)
  }
}
