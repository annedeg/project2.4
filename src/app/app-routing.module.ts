import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './home-page/homepage/homepage.component';
import { NotificationsComponent } from './home-page/notifications/notifications.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
