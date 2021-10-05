import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddHeaderInterceptor } from './interceptor/httpconfig.interceptor';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { CoachSessionViewComponent } from './coach-session-view/coach-session-view.component';
import { ClientSessionViewComponent } from './client-session-view/client-session-view.component';
import { SessionViewComponent } from './session-view/session-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientHomeComponent,
    CoachHomeComponent,
    CreateSessionComponent,
    CoachSessionViewComponent,
    ClientSessionViewComponent,
    SessionViewComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true }
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
