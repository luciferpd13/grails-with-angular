package com.prasanna

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class SessionServiceSpec extends Specification {

    SessionService sessionService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Session(...).save(flush: true, failOnError: true)
        //new Session(...).save(flush: true, failOnError: true)
        //Session session = new Session(...).save(flush: true, failOnError: true)
        //new Session(...).save(flush: true, failOnError: true)
        //new Session(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //session.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        sessionService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Session> sessionList = sessionService.list(max: 2, offset: 2)

        then:
        sessionList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        sessionService.count() == 5
    }

    void "test delete"() {
        Long sessionId = setupData()

        expect:
        sessionService.count() == 5

        when:
        sessionService.delete(sessionId)
        datastore.currentSession.flush()

        then:
        sessionService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Session session = new Session()
        sessionService.save(session)

        then:
        session.id != null
    }
}
