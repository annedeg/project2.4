import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

const API_URL = 'https://sodine.nl:5000/api/v1.0'
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  user_id;
  private user_name = new BehaviorSubject('');
  usernameChange: Subject<string> = new Subject<string>();

  username_public = this.user_name.asObservable();

  public success: boolean = true;
  constructor( private http:HttpClient) { }

  update_user_name(username: string) {
    this.user_name.next(username);
  }

  doGetApiCall(url:string, authorization:string) {
    if(authorization == null) {
      return this.http.get(API_URL+url).toPromise();
    } else {
      return this.http.get(API_URL+url+"?jwt="+authorization).toPromise();
    }
  }

  doPostApiCall(url:string, formData:FormData, authorization:string) {
    if(authorization == null) {
      return this.http.post(API_URL+url, formData).toPromise();
    } else {
      return this.http.post(API_URL+url+"?jwt="+authorization, formData).toPromise();
    }
  }

  doPutApiCall(url:string, formData:FormData, authorization:string) {
    if(authorization == null) {
      return this.http.put(API_URL+url+"?jwt="+authorization, formData).toPromise();
    } else {
      return this.http.put(API_URL+url+"?jwt="+authorization, formData).toPromise();
    }
  }

  async validate(email:string, password:string) {
    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)

    return await this.doPostApiCall("/user/login", formData, null)

  }

  async setSession(response: Token) {
    console.log("fully started bro")
    localStorage.setItem('token', response.access_token)
    await this.doGetApiCall('/user_id', localStorage.getItem('token'))
        .then(
            function(data) {
              let user_id_let: Auth = <Auth> data;
              localStorage.setItem('user_id', String(user_id_let.Identity[0][0]));
            }
        );

    try {
      this.doGetApiCall('/user/'+localStorage.getItem('user_id'), localStorage.getItem('token'))
          .then(
              function(data) {
                let user: User = <User> data;
                let user_info = user[0];
                localStorage.setItem('username', user_info[0]);
                localStorage.setItem('email', user_info[1]);
              }
          ).then(() => {
            this.update_user_name(localStorage.getItem('username'));
          });

    } catch(e) {
      console.log("Error: " + e)
    }
    console.log("fully done man")
  }

  handleError(err) {
  }
}

interface Auth {
  Identity:number[][]
}

interface Token {
  access_token:string
}

interface User {
  info:string[]
}
