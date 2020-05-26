import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { RegisterMenuComponent } from './register-menu/register-menu.component';


@NgModule({
  declarations: [LoginMenuComponent, RegisterMenuComponent],
  exports: [LoginMenuComponent, RegisterMenuComponent],
  imports: [
    CommonModule
  ]
})
export class LoginMenuModule { }
