package com.prasanna

import com.prasanna.*

class BootStrap {

    def init = { servletContext ->
        new User(username: 'cm@cm.com', password: 'qwerty', phone : '+12163547758', firstName: 'Conor'
                ,lastName: 'McGregor', location : 'Las Vegas USA', role: 'COACH', pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg', coachingCategory: 'BOXING').save(flush: true)
        new User(username: 'sc@sc.com', password: 'qwerty', phone : '+447883196637', firstName: 'Stewart'
                ,lastName: 'Gilchrist', location : 'London UK', role: 'COACH', pictureURL: 'https://i.dailymail.co.uk/i/pix/2015/01/14/24AB7C6200000578-2910657-image-a-16_1421276057323.jpg', coachingCategory: 'YOGA').save(flush: true)
        new User(username: 'pd@pd.com', password: 'qwerty', phone : '+917974263781', firstName: 'Prasanna'
                ,lastName: 'Dubey', location : 'Raipur India', role: 'CLIENT', pictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre208Ft9BKNVjDjyLwFNmWCfmOvL2KuaWAg&usqp=CAU', coachingCategory: 'CLIENT').save(flush: true)
        new User(username: 'jb@jb.com', password: 'qwerty', phone : '+447883196632', firstName: 'Johnny'
                ,lastName: 'Bairstow', location : 'Manchester UK', role: 'CLIENT', pictureURL: 'https://www.a-star.edu.sg/images/librariesprovider29/people/john-common.jpg?sfvrsn=45e90b4e_2', coachingCategory: 'CLIENT').save(flush: true)
        new Session(title: 'Yoga Session', description: 'Yoga can be immensely helpful in soothing and relaxing our body, mind and soul.', sessionCostInNumber: 24, sessionCostInCurrency: 'GBP',
                scheduledTo: '2021-10-06T07:00:00+01:00', scheduledFrom: '2021-10-06T08:30:00+01:00', sessionCategory: 'YOGA', instructorName: 'Stewart Gilchrist', instructorUsername: 'sc@sc.com'
                , instructorPhone: '+447883196637', instructorImageURL: 'https://i.dailymail.co.uk/i/pix/2015/01/14/24AB7C6200000578-2910657-image-a-16_1421276057323.jpg', offeredTo: 'pd@pd.com',
                sessionType: 'ONLINE', sessionLocation:'ONLINE', sessionImageURL: 'https://static.toiimg.com/thumb/73803329/YOGA1.jpg?width=1200&height=900').save(flush: true)
        new Session(title: 'Boxing Session', description: 'Become a professional Boxer by training with Conor McGregor', sessionCostInNumber: 250, sessionCostInCurrency: 'GBP',
                scheduledTo: '2021-10-06T10:00:00+01:00', scheduledFrom: '2021-10-06T12:30:00+01:00', sessionCategory: 'BOXING', instructorName: 'Conor McGregor', instructorUsername: 'cm@cm.com'
                , instructorPhone: '+12163547758', instructorImageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg', offeredTo: 'jb@jb.com',
                sessionType: 'INPERSON', sessionLocation:'London UK', sessionImageURL: 'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2020/01/conor-mcgregor-ufc-246-zuffa.jpg').save(flush: true)
    }
    def destroy = {
    }
}