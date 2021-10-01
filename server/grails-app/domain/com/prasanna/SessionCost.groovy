package com.prasanna

class SessionCost {
    long cost;
    String currency;

    static constraints = {
        cost blank : false
        currency nullable : false, blank : false
    }
}
