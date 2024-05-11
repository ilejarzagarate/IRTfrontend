import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../../../core/services/issues/issues.service';

import { NgFor } from '@angular/common';
import { Issue } from '../../../core/models/issue.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, firstPage, increment } from '../../../shared/pager.actions';


@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent {  
  githubRepoForm = new FormGroup({
    userName: new FormControl(''),
    userRepoName: new FormControl('')
  });

  private store = inject(Store);
  page$?: Observable<number> | undefined;
  page: number;
  issues: Issue[] = [];
  hasIssues: boolean = false;
  userName: string = '';
  userRepoName: string =' ';
 
  constructor(private issueService: IssuesService){
    this.page$=this.store.select('pager');
  }
 
  async getGitHubRepoIssues(){
    this.userName = this.githubRepoForm.value.userName!;
    this.userRepoName = this.githubRepoForm.value.userRepoName!;
    await this.issueService.getAllGitHubRepoIssues(this.userName, this.userRepoName);
    this.issueService.getIsues(0)
      .subscribe(result => {
        this.issues = result;
        this.hasIssues = this.issues.length>0;
      });
  }
  getPage(){
    this.page$?.subscribe((page:number) => this.page =page);
  }
  increment(){
    this.store.dispatch(increment());
    this.page$?.subscribe((page) => 
      this.issueService.getIsues(page).subscribe(result => this.issues = result)
    );
  }

  decrement(){
    this.store.dispatch(decrement());
    this.page$?.subscribe((page) => 
      this.issueService.getIsues(page).subscribe(result => this.issues = result)
    );
  }
  firstPage(){
    this.store.dispatch(firstPage());
    this.issueService.getIsues(0).subscribe(result => this.issues = result);
  }
}
