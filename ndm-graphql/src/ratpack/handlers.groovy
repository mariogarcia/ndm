import static ratpack.groovy.Groovy.ratpack

import ratpack.server.ServerConfigBuilder
import ndm.config.AppConfig
import ndm.graphql.Utils
import ndm.graphql.Handler

/**
 *
 */
ratpack {

  serverConfig { ServerConfigBuilder config ->
    config
      .port(8888)
      .yaml("newsdomaths.yml")
      .require("", AppConfig)
  }

  handlers {
    prefix('graphql') {
      all(Utils.createBindingHandler(Map))
      post(Handler)
    }
    files {
      dir('static').indexFiles('index.html')
    }
  }
}
