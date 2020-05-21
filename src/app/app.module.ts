import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './general-components/general-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeneralComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
