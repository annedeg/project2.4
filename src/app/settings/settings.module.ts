
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";


@NgModule({
  declarations: [SettingsPageComponent, ChangePasswordComponent],
  exports: [
    SettingsPageComponent, ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class SettingsModule { }

