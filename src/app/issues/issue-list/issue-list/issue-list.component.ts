import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../../../core/services/issues/issues.service';

import { NgFor } from '@angular/common';
import { Issue } from '../../../core/models/issue.model';


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


  issues: Issue[] = [];
  hasIssues: boolean = false;
  userName: string = '';
  userRepoName: string =' ';
 
  constructor(private issueService: IssuesService){}
 
  async getGitHubRepoIssues(){
    this.userName = this.githubRepoForm.value.userName!;
    this.userRepoName = this.githubRepoForm.value.userRepoName!;
    this.issues = await this.issueService.getAllGitHubRepoIssues(this.userName, this.userRepoName);  
    this.hasIssues = this.issues.length>0;
    console.log(this.issues);
  }
}
