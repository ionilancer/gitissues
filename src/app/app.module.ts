import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { IssuesGridComponent } from './issues-grid/issues-grid.component';
import { ItemIssueComponent } from './issues-grid/item-issue/item-issue.component';



@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    IssuesGridComponent,
    ItemIssueComponent
  ],
  imports:[ BrowserModule,HttpModule ,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
