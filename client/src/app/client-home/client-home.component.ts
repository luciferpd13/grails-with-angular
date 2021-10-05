import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  
  user : any;

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }

  logout = this.logoutService.logOut;

}
