import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
const API_URL = 'http://sodine.nl:5000/api/v1.0'
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  uploadForm;
  public success: boolean = true;
  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }
  
  doGetApiCall(url:string, authorization:string) {
    if(authorization == null) {
      return this.http
        .get(API_URL+url)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.success = false;
            return throwError(err.statusText)
          })
        )
    } else {
      return this.http.get(API_URL+url, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)})
    }
  }

  doPostApiCall(url:string, formData:FormData, authorization:string) {
      if(authorization == null) {
        return this.http.post(API_URL+url, formData);
      } else if(formData == null) {
        return this.http.post(API_URL+url, {headers: new HttpHeaders().set('Authorization', authorization)});
      } else {
        return this.http.post(API_URL+url, formData, {headers: new HttpHeaders().set('Authorization', authorization)});
      }
  }

  validate(username:string, password:string) {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)
    
    return this.doPostApiCall("/login", formData, null)
    .pipe (
        tap ( 
            response => this.setSession(response),
            err => this.handleError(err),
        ),
        shareReplay()
    )
  }

  setSession(response) {
    console.log(response.access_token)
    localStorage.setItem('token', response.access_token)
  } 

  handleError(err) {
    console.log('ERROR')
  }

}

interface User {
  username:String,
  password:String,
}
