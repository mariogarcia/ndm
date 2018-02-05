import static ratpack.groovy.Groovy.ratpack

import ratpack.groovy.sql.SqlModule
import gql.ratpack.GraphQLModule

import ndm.db.Module as DataSourceModule
import ndm.init.Module as InitModule
import ndm.system.Module as SystemModule
import ndm.graphql.Module as SchemaModule
import ndm.author.Module as AuthorModule
import ndm.country.Module as CountryModule
import ndm.article.Module as ArticleModule

ratpack {
  bindings {
    module DataSourceModule
    module SchemaModule
    module SqlModule
    module GraphQLModule
    module SystemModule
    module InitModule
    module CountryModule
    module ArticleModule
    module AuthorModule
  }
}
