import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatBadgeModule, MatBadge} from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent,
    MatBadgeModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class HomePageModule { }
