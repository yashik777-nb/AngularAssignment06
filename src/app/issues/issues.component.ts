import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from '../issue.modal';

import * as IssueActions from '../store/actions/actionsIndex';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  @Input('issueApplicationName') formTitle: string = '';

  Issue = new Issue('', '', '');

  @Output() emitIssue = new EventEmitter<Issue>();

  issueDescription: string;
  issueSeverity: string;
  issueStatus: string;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];
  issues: Observable<{ issues: Issue[] }>;

  constructor(private store: Store<{ issuesList: { issues: Issue[] } }>) {
    this.issueDescription = '';
    this.issueSeverity = '';
    this.issueStatus = '';
  }

  ngOnInit() {
    this.issues = this.store.select('issuesList');
  }

  onFormSubmit() {
    const newIssue = new Issue(
      this.issueDescription,
      this.issueSeverity,
      this.issueStatus
    );
    this.store.dispatch(new IssueActions.AddIssue(newIssue));
    // this.issues.push(
    //   new Issue(this.issueDescription, this.issueSeverity, this.issueStatus)
    // );
    this.emitIssue.emit(
      new Issue(this.issueDescription, this.issueSeverity, this.issueStatus)
    );
  }
}
