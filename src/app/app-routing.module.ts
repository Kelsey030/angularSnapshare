import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/auth/aboutus/aboutus.component';
import { HomepageComponent } from './pages/auth/homepage/homepage.component';
import { LoginComponent } from './pages/auth/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
