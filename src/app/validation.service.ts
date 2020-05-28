import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';

const API_URL = 'http://localhost:5000/api/'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http:HttpClient) { }

  validate (mail:string, pass:string) {
    return this.http.post<User>(API_URL+'login', {mail, pass})
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
  mail:String,
  pass:String,
}
