import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
const API_URL = 'http://sodine.nl:5000/api/v1.0'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  uploadForm;
  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }

  validate (username:string, password:string) {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)
    console.log(API_URL+'/check_user')
    return this.http.post<User>(API_URL+'/check_user', formData)
    .pipe (
        tap ( 
            response => this.setSession(response),
            err => this.handleError(err),
        ),
        shareReplay()
    )
  }

  setSession(response) {
    localStorage.setItem('token', response.token)
  } 

  handleError(err) {
    console.log('ERROR')
  }

}

interface User {
  username:String,
  password:String,
}
