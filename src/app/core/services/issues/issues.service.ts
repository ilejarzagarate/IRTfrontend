import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
  async getAllGitHubRepoIssues(userName?:string, userRepo?: string):Promise<any>{
    let url = this.gitHubUrl+userName+'/'+userRepo+'/issues';

    let promise = new Promise((resolve, reject) =>{
      this.http.get(url).toPromise()
      .then(res => {
        return res;
      });
    });  
    return promise; 
  }
}
