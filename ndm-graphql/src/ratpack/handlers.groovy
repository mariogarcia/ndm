import static ratpack.groovy.Groovy.ratpack

import ratpack.server.ServerConfigBuilder
import ndm.config.AppConfig
import ndm.cors.CorsHandler
import gql.ratpack.GraphQLHandler
import gql.ratpack.GraphiQLHandler

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
    post('graphql', GraphQLHandler)
    get('graphql/browser', GraphiQLHandler)
  }
}
