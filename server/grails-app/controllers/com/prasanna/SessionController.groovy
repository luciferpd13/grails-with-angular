package com.prasanna

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY
import com.prasanna.*
import javax.servlet.http.*
import grails.util.GrailsStringUtils;

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class SessionController {

    SessionService sessionService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond sessionService.list(params), model:[sessionCount: sessionService.count()]
    }

    def show(Long id) {
        respond sessionService.get(id)
    }

    @Transactional
    def save(Session session) {
        HttpSession userSession = request.getSession(false);
        session.instructorName = userSession.getAttribute("name")
        session.instructorUsername = userSession.getAttribute("username")
        session.instructorPhone = userSession.getAttribute("phone")
        session.instructorImageURL = userSession.getAttribute("pictureURL")
        print session.instructorName
        print session.instructorUsername
        print session.instructorPhone
        if (session == null) {
            render status: NOT_FOUND
            return
        }
        if (session.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond session.errors
            return
        }

        try {
            if(GrailsStringUtils.isNotEmpty(session.instructorName) && GrailsStringUtils.isNotEmpty(session.instructorUsername) && GrailsStringUtils.isNotEmpty(session.instructorPhone)){
                sessionService.save(session)
            }else{
                throw new NullPointerException("Session Not Found");
            }
        } catch (ValidationException e) {
            respond session.errors
            return
        }

        respond session, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Session session) {
        if (session == null) {
            render status: NOT_FOUND
            return
        }
        if (session.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond session.errors
            return
        }

        try {
            sessionService.save(session)
        } catch (ValidationException e) {
            respond session.errors
            return
        }

        respond session, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || sessionService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
