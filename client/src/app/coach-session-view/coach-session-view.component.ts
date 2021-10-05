import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { LogoutService } from '../service/logout.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-coach-session-view',
  templateUrl: './coach-session-view.component.html',
  styleUrls: ['./coach-session-view.component.css']
})
export class CoachSessionViewComponent implements OnInit {

  user : {};
  isSessionEmpty: boolean;
  sessions : [];

  constructor(private sessionService: SessionService, private logoutService: LogoutService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    this.sessionService.getSessionByFilter({
      "instructorUsername" : this.user['username']
    }).subscribe((res:any) => {
      if (res && res.length > 0) {
        this.sessions = res;
        this.isSessionEmpty = false;
      } else {
        this.isSessionEmpty = true;
      }
    })
  }

  logout = this.logoutService.logOut;

  showThisSession = (session: any) => {
    let navigationExtras: NavigationExtras = {
      queryParams: session
    };
    this.router.navigate(["session-view"], navigationExtras);
  }

}
