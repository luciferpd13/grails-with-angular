import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: {};
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: ''
    };
  }

  submitForm = (login: any) => {
    this.loginService.authenticate(login).subscribe((res) => {
      localStorage.setItem('authToken', res['access_token']);
      this.loginService.getUserData(res).subscribe((user:any) => {
        localStorage.setItem('user', JSON.stringify(user));
        if(user.role && user.role === 'CLIENT'){
          this.router.navigate(['/user-home']);
        }else{
          this.router.navigate(['/coach-home']);
        }
      })
    });
  }

}
