import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Issue } from '../../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  
  results: any;

  constructor(
    private http: HttpClient
  ) { 
    this.results =[];
  }
  
  private gitHubUrl: string = 'https://api.github.com/repos/';
  
  getAllGitHubRepoIssues(userName?:string, userRepo?: string):Promise<Issue[]>{
    const url = this.gitHubUrl+userName+'/'+userRepo+'/issues';

    const getData = this.http.get<Issue[]>(url);
    return firstValueFrom(getData);
  }
}
