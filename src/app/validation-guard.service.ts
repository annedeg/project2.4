import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {ValidationService} from './validation.service';

@Injectable({
    providedIn: 'root'
})
export class ValidationGuardService implements CanActivate {

    constructor(public validation: ValidationService, public router: Router) {
    }

    canActivate(): boolean {
        if (localStorage.getItem('token') !== null) {
            var works: boolean;
            this.validation.doGetApiCall('/auth', localStorage.getItem('token')).then(
                () => {
                    works = true;
                }, () => {
                    this.router.navigateByUrl('/login');
                    works = false;
                }
            );
            return true;
        }
        return false;
    }
}
