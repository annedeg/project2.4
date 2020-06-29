import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu/login-menu.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { HomepageComponent } from './home-page/homepage/homepage.component';
import { CoronaFormComponent } from './i-have-corona/coronaform/coronaform.component';
import { ValidationService } from './validation.service';
import { ValidationGuardService } from './validation-guard.service';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginMenuModule} from "./login-menu/login-menu.module";
import {RegisterMenuComponent} from "./login-menu/register-menu/register-menu.component";
import { NickPageComponent } from './nick-page/nick-page.component';
import { RoommateComponent } from './add-roommate/roommate/roommate.component';
import { RoommateOverviewComponent } from './add-roommate/roommate-overview/roommate-overview.component';
import { ContactOverviewComponent } from './add-contact/contact-overview/contact-overview.component';
import { AddContactModule } from './add-contact/add-contact.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginMenuComponent },
  { path: 'header', component: HeaderComponent, canActivate: [ValidationGuardService] },
  { path: 'footer', component: FooterComponent, canActivate: [ValidationGuardService] },
  { path: 'homepage', component: HomepageComponent, canActivate: [ValidationGuardService] },
  { path: 'coronaform', component: CoronaFormComponent, canActivate: [ValidationGuardService] },
  { path: 'register', component: RegisterMenuComponent},
  { path: 'settings', component: SettingsPageComponent, canActivate: [ValidationGuardService]},
  { path: 'settings/wijzig-wachtwoord', component: ChangePasswordComponent, canActivate: [ValidationGuardService]},
  { path: 'nick', component: NickPageComponent, canActivate: [ValidationGuardService]}
  { path: 'settings/wijzig-wachtwoord', component: ChangePasswordComponent, canActivate: [ValidationGuardService]},
  { path: 'roommates', component: RoommateOverviewComponent, canActivate: [ValidationGuardService]},
  { path: 'roommates/add', component: RoommateComponent, canActivate: [ValidationGuardService]},
  { path: 'contacts', component: ContactOverviewComponent, canActivate: [ValidationGuardService]},
  { path: 'contacts/add', component: AddContactModule, canActivate: [ValidationGuardService]},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
      LoginMenuModule,
  ],
  providers: [
    ValidationService,
    ValidationGuardService,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
