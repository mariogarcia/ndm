import static ratpack.groovy.Groovy.ratpack

import ndm.system.SystemModule
import ndm.graphql.HandlerModule

ratpack {
  bindings {
    module SystemModule
    module HandlerModule
  }
}
