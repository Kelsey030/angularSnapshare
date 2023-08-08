import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomepageComponent } from './/pages/auth/homepage/homepage.component';
import { AboutusComponent } from './/pages/auth/aboutus/aboutus.component';
import { ContactusComponent } from './pages/auth/contactus/contactus.component';
import { Contactus2Component } from './pages/auth/contactus2/contactus2.component';
import { Homepage2Component } from './pages/auth/homepage2/homepage2.component';
import { SearchComponent } from './pages/auth/search/search.component';
import { UploadComponent } from './pages/auth/upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AboutusComponent,
    ContactusComponent,
    Contactus2Component,
    Homepage2Component,
    SearchComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



