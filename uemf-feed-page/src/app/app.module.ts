import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
