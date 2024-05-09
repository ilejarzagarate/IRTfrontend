import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../../../core/services/issues/issues.service';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.sass'
})
export class IssueListComponent {  
  githubRepoForm = new FormGroup({
    userName: new FormControl(''),
    userRepoName: new FormControl('')
  });

  constructor(private issueService: IssuesService){}
  async getGitHubRepoIssues(){
    let userName = this.githubRepoForm.value.userName;
    let userRepoName = this.githubRepoForm.value.userRepoName;
    const result = await this.issueService.getAllGitHubRepoIssues(userName == null ? '': userName, userRepoName == null ? '' : userRepoName);
    console.log(result);
  }
}
