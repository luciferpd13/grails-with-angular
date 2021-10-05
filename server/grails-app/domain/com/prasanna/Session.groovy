package com.prasanna

import com.prasanna.*

class Session {

    String title
    String description
    long sessionCostInNumber;
    String sessionCostInCurrency;
    Date scheduledTo;
    Date scheduledFrom;
    String sessionCategory
    String instructorName
    String instructorUsername
    String instructorPhone
    String instructorImageURL
    String offeredTo
    SessionType sessionType
    String sessionLocation
    Date createdOn
    Date modifiedOn
    String sessionImageURL

    def beforeInsert() {
        createdOn = new Date()
        modifiedOn = new Date()
    }

    def beforeUpdate() {
        modifiedOn = new Date()
    }


    static constraints = {
        title size: 0..60,nullable: false, blank: false
        description nullable: false,blank: false
        sessionCostInNumber blank : false
        sessionCostInCurrency nullable : false, blank : false
        scheduledFrom nullable : false, blank : false
        scheduledTo nullable : false, blank : false
        createdOn nullable: true
        modifiedOn nullable: true
        instructorName nullable: true
        instructorUsername nullable: true
        instructorPhone nullable: true
        instructorImageURL nullable: true
        offeredTo nullable: false
    }
}
