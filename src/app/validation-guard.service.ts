import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationGuardService implements CanActivate {

  constructor(public validation: ValidationService, public router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  } 
}
