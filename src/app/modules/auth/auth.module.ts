import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoginformComponent,
    AdminloginComponent,
    RegisterComponent,
    RegisterformComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
