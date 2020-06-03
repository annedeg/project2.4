import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule} from '@angular/material/button';
import {MatBadgeModule, MatBadge} from '@angular/material/badge';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent, MatButtonModule,
    MatBadgeModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule
  ]
})
export class HomePageModule { }
