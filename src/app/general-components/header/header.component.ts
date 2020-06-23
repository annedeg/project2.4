import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {ValidationService} from '../../validation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    loginName: string;

    constructor(public router: Router, public val: ValidationService) {
        this.val.username_public.subscribe((username) => {
            this.loginName = username;
        });
    }

    login() {
        this.logout();
    }

    logout() {
        new Promise((resolve) => {
            localStorage.clear();
            console.log(localStorage)
            console.log("deleted");
            resolve.apply(null);
        }).then(() => {
            this.router.navigate(['login'])
            console.log("navigated");
        }).then(() => {
            this.ngOnInit();
            console.log("initialized");
        });

    }

    settings() {
        this.router.navigate(['settings']);
    }

    ngOnInit(): void {
        this.loginName = "";

        console.log(this.loginName);
    }


    // checkName() {
    //   if(localStorage.getItem('username')) {
    //     this.loginName = localStorage.getItem('username');
    //   } else {
    //     this.loginName = "";
    //   }
    //   console.log("login name updated")
    // }
}
