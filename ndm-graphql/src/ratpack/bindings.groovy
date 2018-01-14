import static ratpack.groovy.Groovy.ratpack

import ratpack.groovy.sql.SqlModule

import ndm.system.SystemModule
import ndm.graphql.HandlerModule
import ndm.db.DataSourceModule
import ndm.init.InitModule

ratpack {
  bindings {
    module SystemModule
    module HandlerModule
    module DataSourceModule
    module InitModule
    module SqlModule
  }
}
