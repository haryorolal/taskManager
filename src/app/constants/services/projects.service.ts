import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  api = environment.api;
  currentUser = {token: ""}

  constructor(private httpClient: HttpClient) { }

  getAllProjects() : Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.api}/projects`, {responseType: "json"})
    .pipe(map(
      (data: Project[]) => {
        for (var j = 0; j < data.length; j++) {
          data[j].teamSize = data[j].teamSize * 100;
        }
        return data;
      }
    ))
  }

  insertProject(newProject: Project) : Observable<Project> {
    const xsrfToken = sessionStorage.getItem("XSRFRequestToken");
    if (!xsrfToken) {
      console.warn("XSRF token is missing. Request may fail.");
    }  
    const requestHeaders = new HttpHeaders().set("X-XSRF-TOKEN", xsrfToken || "");
    return this.httpClient.post<Project>(`${this.api}/projects`, newProject, {headers: requestHeaders, responseType: "json"});
  }

  updateProject(existingProject: Project) : Observable<Project> {
    return this.httpClient.put<Project>(`${this.api}/projects`, existingProject, {responseType: "json"});
  }

  deleteProject(projectID: number) : Observable<string> {
    return this.httpClient.delete<string>(`${this.api}/projects?projectId=${projectID}`);
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.api}/projects/search/${searchBy}/${searchText}`, {responseType: "json"})
  }

}
