import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './general-components/general-components.module';
import { LoginMenuModule } from './login-menu/login-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { IHaveCoronaModule } from "./i-have-corona/i-have-corona.module";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    GeneralComponentsModule,
    LoginMenuModule,
    FormsModule,
    AppRoutingModule,
    IHaveCoronaModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
