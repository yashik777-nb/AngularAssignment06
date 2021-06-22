import { Action } from '@ngrx/store';
import { Issue } from 'src/app/issue.modal';
import * as IssueTypes from '../types/issue-types';
import * as ActionsIndex from '../actions/actionsIndex';

// import * as IssuesActions from '../actions/issues.actions';

const initialState = {
  issues: [
    new Issue('Issue One', 'Minor', 'Open'),
    new Issue('Issue Two', 'Major', 'In Progress'),
    new Issue('Issue Three', 'Critical', 'Closed'),
  ],
};

export function issuesReducer(
  state = initialState,
  action: ActionsIndex.AddIssue
) {
  switch (action.type) {
    case IssueTypes.ADD_ISSUES:
      return {
        ...state,
        issues: [...state.issues, action.newIssue],
      };
    default:
      return {
        ...state,
      };
  }
}
