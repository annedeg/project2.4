import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './general-components/general-components.module';
import { LoginMenuModule } from './login-menu/login-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { IHaveCoronaModule } from './i-have-corona/i-have-corona.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent
  ],
  imports: [
      CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GeneralComponentsModule,
    LoginMenuModule,
    AppRoutingModule,
    IHaveCoronaModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

