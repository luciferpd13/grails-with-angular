import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { LogoutService } from '../service/logout.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-client-session-view',
  templateUrl: './client-session-view.component.html',
  styleUrls: ['./client-session-view.component.css']
})
export class ClientSessionViewComponent implements OnInit {

  sessions: [];

  user : {}

  isSessionEmpty: boolean;

  category: String;

  constructor(private sessionService: SessionService, private logoutService: LogoutService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const categoroy = this.route.snapshot.paramMap.get('id');
    this.category = categoroy;
    this.sessionService.getSessionByFilter({
      "sessionCategory": categoroy.toUpperCase(),
      "offeredTo" : this.user['username']
    }).subscribe((res: any) => {
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
