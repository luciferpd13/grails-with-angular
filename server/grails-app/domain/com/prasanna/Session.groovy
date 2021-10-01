package com.prasanna

import com.prasanna.*

class Session {

    String title
    String description
    SessionCost sessionCost
    SessionSchedule schedule
    String sessionCategory
    String instructorName
    String instructorUsername
    String instructorPhone
    String instructorImageURL
    SessionType sessionType
    String sessionLocation
    Date createdOn
    Date modifiedOn
    String sessionImageURL


    static constraints = {
        title size: 0..60,nullable: false, blank: false
        description nullable: false,blank: false
    }
}
