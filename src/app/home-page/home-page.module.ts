import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [HomepageComponent, NotificationsComponent],
  exports: [
    HomepageComponent, NotificationsComponent, MatButtonModule
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class HomePageModule { }
