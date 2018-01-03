package ndm.graphql

import static gql.DSL.schema

import graphql.schema.GraphQLSchema

import javax.inject.Inject
import javax.inject.Provider

import ndm.system.SystemGraphQL

/**
 * Provides a singleton instance of the {@link GraphQLSchema} type
 *
 * @since 0.1.0
 */
class SchemaProvider implements Provider<GraphQLSchema> {

  @Inject SystemGraphQL graphQLSystem

  @Override
  GraphQLSchema get() {
    return schema {
      queries {
        addField graphQLSystem.getSystemStatus()
      }
    }
  }
}
