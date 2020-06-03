import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu/login-menu.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { HomepageComponent } from './home-page/homepage/homepage.component';
import { CoronaFormComponent } from './i-have-corona/coronaform/coronaform.component';
import { ValidationService } from './validation.service';
import { ValidationGuardService } from './validation-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginMenuComponent },
  { path: 'header', component: HeaderComponent, canActivate:[ValidationGuardService] },
  { path: 'footer', component: FooterComponent, canActivate:[ValidationGuardService] },
  { path: 'homepage', component: HomepageComponent, canActivate:[ValidationGuardService] },
  { path: 'coronaform', component: CoronaFormComponent, canActivate:[ValidationGuardService] },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ValidationService,
    ValidationGuardService,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
