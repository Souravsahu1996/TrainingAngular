import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngProgram1Component } from './ang-program1/ang-program1.component';

@NgModule({
  declarations: [
    AppComponent,
    AngProgram1Component,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
