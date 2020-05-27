import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist/checklist.component';



@NgModule({
  declarations: [ChecklistComponent],
  exports: [
    ChecklistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IHaveCoronaModule {
}
