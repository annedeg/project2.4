import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu/login-menu.component';
import { HeaderComponent } from './general-components/header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginMenuComponent },
  { path: 'header', component: HeaderComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
