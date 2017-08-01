import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { IssuesGridComponent } from './issues-grid/issues-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    IssuesGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
