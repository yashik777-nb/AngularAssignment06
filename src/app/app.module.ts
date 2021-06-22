import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueAddedComponent } from './issue-added/issue-added.component';

import { StoreModule } from '@ngrx/store';
import { issuesReducer } from './store/reducers/issues.reducer';

@NgModule({
  declarations: [AppComponent, IssuesComponent, IssueAddedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ issues: issuesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
