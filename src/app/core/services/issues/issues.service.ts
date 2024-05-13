import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, of } from 'rxjs';
import { Issue } from '../../models/issue.model';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {  
  issues: any;
  pageSize: number = 5;


  constructor(
    private http: HttpClient
  ) {
    this.issues =[];
  }
 
  private gitHubUrl: string = 'https://api.github.com/repos/';
 
  async getAllGitHubRepoIssues(userName?:string, userRepo?: string): Promise<Issue[]>{
    const url = this.gitHubUrl+userName+'/'+userRepo+'/issues';


    const getData = this.http.get<Issue[]>(url);
    return firstValueFrom(getData);
  }


  setIssuesData(issuesData: Issue[]){
    this.issues = issuesData;
  }


  getIsues(page: number): Observable<Issue[]>{  
    const startIndex = page * this.pageSize;
    const endIndex = startIndex + this.pageSize;


    return of(this.issues.slice(startIndex, endIndex));
  }
}
