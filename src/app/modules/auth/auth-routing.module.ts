import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';

const routes: Routes = [{
  path: "", 
  component: HomeComponent
},
{
  path:"login",
  component: LoginComponent
},
{
  path:"register",
  component: RegisterComponent
},
{
  path:"adminlogin",
  component: AdminloginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AuthRoutingModule { }
