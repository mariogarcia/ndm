import static ratpack.groovy.Groovy.ratpack

import ratpack.server.ServerConfigBuilder
import ndm.config.AppConfig
import ndm.cors.CorsHandler
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
    all(new CorsHandler())
    all(Utils.createBindingHandler(Map))
    prefix('graphql') {
      post(Handler)
    }
    files {
      dir('static').indexFiles('index.html')
    }
  }
}
