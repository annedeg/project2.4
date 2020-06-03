import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationGuardService implements CanActivate {

  constructor(public validation: ValidationService, public router: Router) {}

  async canActivate(): Promise<boolean> {
    await this.validation.checkSession()
    console.log("fuck you bitch " + this.validation.success)
    if (!this.validation.success) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
