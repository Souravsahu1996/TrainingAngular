import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CaredetailsComponent } from './caredetails/caredetails.component';
import { IcuComponent } from './care/icu/icu.component';
import { HeartComponent } from './heart/heart.component';
@NgModule({
  declarations: [
    AppComponent, 
    routingcomponents,CaredetailsComponent, IcuComponent, HeartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
