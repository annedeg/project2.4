import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoronaFormComponent } from './coronaform/coronaform.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CoronaFormComponent],
  exports: [
    CoronaFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class IHaveCoronaModule {
}
