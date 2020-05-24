import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [HomepageComponent, NotificationsComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
