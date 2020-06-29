import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './general-components/general-components.module';
import { LoginMenuModule } from './login-menu/login-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { IHaveCoronaModule } from './i-have-corona/i-have-corona.module';
import { HttpClientModule } from '@angular/common/http';
import {SettingsModule} from "./settings/settings.module";
import {MatBadgeModule} from "@angular/material/badge";
import {HomePageModule} from "./home-page/home-page.module";
import { AddRoommateModule } from './add-roommate/add-roommate.module';
import { AddContactModule } from './add-contact/add-contact.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NickPageComponent } from './nick-page/nick-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NickPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    GeneralComponentsModule,
    LoginMenuModule,
    AppRoutingModule,
    IHaveCoronaModule,
    HttpClientModule,
      SettingsModule,
      HomePageModule,
      AddRoommateModule,
      AddContactModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [RouterModule,
    MatBadgeModule],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

