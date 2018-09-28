import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchCompComponent } from './search-comp/search-comp.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { SearchFinalComponent } from './search-final/search-final.component';
import { SearchStoreFinalComponent } from './search-comp/search-store-final/search-store-final.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCompComponent,
    SearchProjectComponent,
    SearchFinalComponent,
    SearchStoreFinalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
