import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem("authToken");
    if (token) {
      if (state.url === '/login' || state.url === '/') {
        let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        if(user){
          if(user.role && user.role === 'CLIENT'){
            this.router.navigate(['/user-home']);
          }else{
            this.router.navigate(['/coach-home']);
          }
        }else{
          localStorage.clear();
          this.router.navigate(['login']);
          return false
        }
      } else {
        let role = next.data && next.data.role ? next.data.role : null;
        if (role) {
          let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
          if (user && user.role === role) {
            return true;
          } else {
            return false;
          }
        } else {
          return true
        }
      }
    } else if (state.url === '/login' || state.url === '/') {
      return true
    } else {
      localStorage.clear();
      this.router.navigate(['login']);
      return false
    }
  }

}
