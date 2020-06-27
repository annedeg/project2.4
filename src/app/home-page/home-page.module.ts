import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatBadgeModule, MatBadge} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent,
    MatBadgeModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class HomePageModule { }
