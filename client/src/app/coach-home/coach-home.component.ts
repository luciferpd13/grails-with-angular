import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  user : {};

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }

  logout = this.logoutService.logOut;
  
}
