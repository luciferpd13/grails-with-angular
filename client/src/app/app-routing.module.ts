import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { RouteGuardService } from './service/route-guard.service';
import { CreateSessionComponent } from './create-session/create-session.component';
import { CoachSessionViewComponent } from './coach-session-view/coach-session-view.component';
import { ClientSessionViewComponent } from './client-session-view/client-session-view.component';
import { SessionViewComponent } from './session-view/session-view.component';

const routes: Routes = [
   {path: '', component: LoginComponent, canActivate:[RouteGuardService]},
   {path: 'login', component: LoginComponent, canActivate:[RouteGuardService]},
   {path: 'user-home', component: ClientHomeComponent, canActivate:[RouteGuardService], data : { role : 'CLIENT'} },
   {path: 'coach-home', component: CoachHomeComponent, canActivate:[RouteGuardService], data : { role : 'COACH'} },
   {path: 'create-session', component: CreateSessionComponent, canActivate:[RouteGuardService], data : { role : 'COACH'} },
   {path: 'coach-view', component: CoachSessionViewComponent, canActivate:[RouteGuardService], data : { role : 'COACH'} },
   { path: 'client-view/:id', component: ClientSessionViewComponent, canActivate:[RouteGuardService], data : { role : 'CLIENT'} },
   { path: 'session-view', component: SessionViewComponent, canActivate:[RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
