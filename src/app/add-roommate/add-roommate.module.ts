import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommateComponent } from './roommate/roommate.component';
import { FormsModule } from '@angular/forms';
import { RoommateOverviewComponent } from './roommate-overview/roommate-overview.component';



@NgModule({
  declarations: [RoommateComponent, RoommateOverviewComponent],
  exports: [RoommateComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AddRoommateModule { }
