import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login/login1/login1.component';
import { SignupComponent } from './login/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddaccidentComponent } from './user/addaccident/addaccident.component';
import { BookumblenceComponent } from './user/bookumblence/bookumblence.component';
import { AwarenessComponent } from './user/awareness/awareness.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login1Component,
    SignupComponent,
    UserComponent,
    ProfileComponent,
    AddaccidentComponent,
    BookumblenceComponent,
    AwarenessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
