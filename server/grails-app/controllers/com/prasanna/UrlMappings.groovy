package com.prasanna

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller/finduserbyusername(.$format)?"(action:"findUserByUsername")
        post "/$controller/findsessionbyfilter(.$format)?"(action:"findSessionByFilter")
        post "/$controller(.$format)?"(action:"save")
        post "/$controller?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
