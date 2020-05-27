import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { RegisterMenuComponent } from './register-menu/register-menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginMenuComponent, RegisterMenuComponent],
  exports: [LoginMenuComponent, RegisterMenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginMenuModule { }
