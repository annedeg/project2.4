import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';



import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsPageComponent, ChangePasswordComponent],
  exports: [
    SettingsPageComponent, ChangePasswordComponent
  ],
  imports: [    CommonModule,
    FormsModule,]
})
export class SettingsModule { }