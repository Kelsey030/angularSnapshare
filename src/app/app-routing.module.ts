import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/auth/aboutus/aboutus.component';
import { HomepageComponent } from './pages/auth/homepage/homepage.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ContactusComponent } from './pages/auth/contactus/contactus.component';
import { Contactus2Component } from './pages/auth/contactus2/contactus2.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { UploadComponent } from './pages/auth/upload/upload.component';
import { SearchComponent } from './pages/auth/search/search.component';

const routes: Routes = [
  {
    component:AboutusComponent,
    path:'aboutus'
  },

  {
    component:HomepageComponent,
    path:'homepage'
  },

  {
    component:LoginComponent,
    path:'login'
  },

  {
    component:ContactusComponent,
    path:'contactus'
  },

  {  
     component:Contactus2Component,
  path:'contactus2'
  },

  {  
    component:SignupComponent,
 path:'signup'
 },

 {  
  component:UploadComponent,
path:'upload'
},

{  
  component:SearchComponent,
path:'search'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
