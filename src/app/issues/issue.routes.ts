import { Routes } from "@angular/router";
import { IssueDetailComponent } from "./issue-detail/issue-detail/issue-detail.component";
import { IssueListComponent } from "./issue-list/issue-list/issue-list.component";

export const ISSUES_ROUTES: Routes = [
    {path: 'issue-detail', component: IssueDetailComponent},
    {path: 'issue-list', component: IssueListComponent}
]