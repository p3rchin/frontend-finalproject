import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }