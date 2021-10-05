import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $ } from 'protractor';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.css']
})
export class SessionViewComponent implements OnInit {

  session: {}
  user : {}
  sessionCategory : String

  constructor(private route: ActivatedRoute, private logoutService: LogoutService) {
    this.route.queryParams.subscribe(params => {
      this.session = params;
      this.sessionCategory = params.sessionCategory.toLowerCase();
    });
  }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    var element = document.getElementById('cover');
    element.style.backgroundImage = "url(" +  this.session['sessionImageURL'] + ")";
  }

  logout = this.logoutService.logOut;

}
