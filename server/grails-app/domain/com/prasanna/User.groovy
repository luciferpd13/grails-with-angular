package com.prasanna

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic
import com.prasanna.*

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    String username
    String password
    String phone
    String firstName
    String lastName
    String location
    UserRole role
    String  pictureURL
    String coachingCategory
    Date createdOn
    Date modifiedOn

    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    def beforeInsert() {
        username = username?.trim().toLowerCase()
        coachingCategory = role.equals(UserRole.CLIENT) ? "CLIENT" : coachingCategory
        createdOn = new Date()
        modifiedOn = new Date()
    }

    def beforeUpdate() {
        coachingCategory = role.equals(UserRole.CLIENT) ? "CLIENT" : coachingCategory
        modifiedOn = new Date()
    }

    Set<Authority> getAuthorities() {
        (UserAuthority.findAllByUser(this) as List<UserAuthority>)*.authority as Set<Authority>
    }

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true
        phone unique: true
        firstName nullable: false, blank: false
        lastName nullable: false,blank: false
        role nullable: false,blank: false
        pictureURL  unique: true
        createdOn nullable: true
        modifiedOn nullable: true
    }

    static mapping = {
        password column: '`password`'
    }
}
