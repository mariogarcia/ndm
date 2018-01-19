import static ratpack.groovy.Groovy.ratpack

import ratpack.groovy.sql.SqlModule

import ndm.system.SystemModule
import ndm.graphql.HandlerModule
import ndm.db.DataSourceModule
import ndm.init.InitModule

import ndm.author.Module as AuthorModule
import ndm.country.Module as CountryModule
import ndm.article.Module as ArticleModule

ratpack {
  bindings {
    module SystemModule
    module HandlerModule
    module DataSourceModule
    module InitModule
    module SqlModule
    module CountryModule
    module ArticleModule
    module AuthorModule
  }
}
