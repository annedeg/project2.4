import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './home-page/homepage/homepage.component';
import { IHaveCoronaModule } from './i-have-corona/i-have-corona.module';
import { ChecklistComponent } from './i-have-corona/checklist/checklist.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  {path: 'ikhebcorona', component: ChecklistComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
