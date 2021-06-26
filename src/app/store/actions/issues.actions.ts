import { Action } from '@ngrx/store';
import { Issue } from 'src/app/issue.modal';
import * as IssueTypes from '../types/action-types';

export class AddIssue implements Action {
  readonly type = IssueTypes.ADD_ISSUES;

  constructor(public newIssue: Issue) {}
}
