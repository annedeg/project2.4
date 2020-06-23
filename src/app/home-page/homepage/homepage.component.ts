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

    ngOnInit(): void {
        this.validationService.doGetApiCall('/notifications/' + localStorage.getItem('user_id'), localStorage.getItem('token'))
            .then((data) => {
                let notifactions: Object[] = <any[]> data;
                let amountOfNotifications = notifactions.length;
                for(let i = 0; i < amountOfNotifications; i++) {
                    console.log(notifactions[i][0]);
                }
            }, (error) => {
                let error_2: HttpErrorResponse = error;
                if (error_2.status === 401) {
                    //token expired
                    this.router.navigate(['login']);
                }
            });
    }

    btnClick = function () {
        this.router.navigateByUrl('/coronaform');
    };
}
