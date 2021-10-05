import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  user : {}
  session : {}

  constructor(private sessionService: SessionService, private router: Router, private logoutService: LogoutService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    this.session = {
      title : "",
      description : "",
      sessionCostInNumber: 0,
      sessionCostInCurrency: "GBP",
      scheduledTo: null,
      scheduledFrom: null,
      sessionCategory: this.user['coachingCategory'],
      sessionType: "ONLINE",
      sessionLocation: "ONLINE",
      sessionImageURL: "",
      instructorName : this.user['firstName'] + ' ' + this.user['lastName'],
      instructorUsername : this.user['username'],
      instructorPhone : this.user['phone'],
      instructorImageURL : this.user['pictureURL'],
      offeredTo : ''
    }
  }

  save = (session: any) => {
      session.scheduledFrom = new Date(session.scheduledFrom);
      session.scheduledTo = new Date(session.scheduledTo);
      this.sessionService.createSession(session).subscribe((res) => {
        alert("Session Created");
        this.router.navigate(['/coach-home']);
      })
  }

  setType = (type: string) => {
    if(type === 'ONLINE'){
      this.session['sessionLocation'] = 'ONLINE'
    }else{
      this.session['sessionLocation'] = ''
    }
  }

  logout = this.logoutService.logOut;
  
}
