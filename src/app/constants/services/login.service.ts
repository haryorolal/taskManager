import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../models/login-view-model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.api;
  private httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService) { }

  currentUserName: string = "";

  public login(loginViewModel: LoginViewModel): Observable<any> {
    console.log(loginViewModel)
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(`${this.api}/authenticate`, loginViewModel, {responseType: "json", observe: "response"})
    .pipe(map((response) => {
      if (response)
      {
        //retrieve user and store in a variable to persist
        this.currentUserName = response.body.userName;
        sessionStorage.setItem("currentUser", JSON.stringify(response.body) );
        
        // Store XSRF token in sessionStorage
        const xsrfToken = response.headers.get("XSRF-REQUEST-TOKEN");
        if (xsrfToken) {
          sessionStorage.setItem("XSRFRequestToken", xsrfToken);
        } else {
          console.warn("XSRF-REQUEST-TOKEN is missing in response headers.");
        }
      }
      return response.body;
    }))
  }

  public logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = "";
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") || "{}").token : null;
    
    if (this.jwtHelperService.isTokenExpired(token)) {
      return false; //token is not valid
    } else {
      return true; //tokon is valid
    }
  }


}

