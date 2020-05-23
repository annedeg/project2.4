import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IHaveCoronaModule } from "./i-have-corona/i-have-corona.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IHaveCoronaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
