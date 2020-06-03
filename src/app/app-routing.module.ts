import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu/login-menu.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { HomepageComponent } from './home-page/homepage/homepage.component';
import { CoronaFormComponent } from './i-have-corona/coronaform/coronaform.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginMenuComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'coronaform', component: CoronaFormComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
