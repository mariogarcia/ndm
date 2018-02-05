package ndm.init

import com.google.inject.AbstractModule
import com.google.inject.Scopes
import com.google.inject.multibindings.Multibinder
import ratpack.service.Service

import ndm.db.FlywayService

/**
 * Binds all initial services
 *
 * @since 0.1.0
 */
class Module extends AbstractModule {
  @Override
  protected void configure() {
    Multibinder<Service> servicesBinder = Multibinder.newSetBinder(binder(), Service)

    servicesBinder.with {
      addBinding().to(FlywayService).in(Scopes.SINGLETON)
    }
  }
}
