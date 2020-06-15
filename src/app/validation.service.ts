import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
const API_URL = 'https://sodine.nl:5000/api/v1.0'
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
        .get(API_URL+url).toPromise();
    } else {
      return this.http.get(API_URL+url, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)}).toPromise();
    }
  }

  doPostApiCall(url:string, formData:FormData, authorization:string) {
      if(authorization == null) {
        return this.http.post(API_URL+url, formData).toPromise();
      } else if(formData == null) {
        return this.http.post(API_URL+url, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)}).toPromise();
      } else {
        return this.http.post(API_URL+url, formData, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)}).toPromise();
      }
  }

  doPutApiCall(url:string, formData:FormData, authorization:string) {
    if(authorization == null) {
      return this.http.put(API_URL+url, formData).toPromise();
    } else if(formData == null) {
      return this.http.put(API_URL+url, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)}).toPromise();
    } else {
      console.log("we ride at dawn bitch")
      return this.http.put(API_URL+url, formData, {headers: new HttpHeaders().set('Authorization', "Bearer " + authorization)}).toPromise();
    }
  }

  async validate(email:string, password:string) {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)
    
    return await this.doPostApiCall("/login", formData, null)
    
  }

  setSession(response: Token) {
    console.log(response.access_token)
    localStorage.setItem('token', response.access_token)
  } 

  handleError(err) {
  }

}

interface Token {
  access_token:string
}