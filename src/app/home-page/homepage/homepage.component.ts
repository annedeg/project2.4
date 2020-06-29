import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidationService} from 'src/app/validation.service';
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    constructor(private validationService: ValidationService, private router: Router) {
    }
    percentage = 100;

    ngOnInit(): void {
        this.validationService.doGetApiCall('/notifications/' + localStorage.getItem('user_id'), localStorage.getItem('token'))
            .then((data) => {
            }, (error) => {
                let error_2: HttpErrorResponse = error;
                if (error_2.status === 401) {
                    //token expired 
                }
            })
    }

    btnClick = function () {
        this.router.navigateByUrl('/coronaform');
    };

    roommates() {
        this.router.navigate(['roommates']);
    }

    contactmoments() {
        this.router.navigate(['contacts'])
    }

    notifications() {
        this.router.navigate(['notifications'])
    }
}
