package com.prasanna

import grails.gorm.services.Service

@Service(Session)
interface SessionService {

    Session get(Serializable id)

    List<Session> list(Map args)

    Long count()

    Session delete(Serializable id)

    Session save(Session session)

}
