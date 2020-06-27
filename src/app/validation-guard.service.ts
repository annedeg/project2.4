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
            this.validation.doGetApiCall('/user_id', localStorage.getItem('token')).then(
                () => {
                    works = true;
                }, () => {
                    localStorage.clear();
                    this.router.navigateByUrl('/login');
                    works = false;
                }
            )
            return true;
        }
        return false;
    }
}
