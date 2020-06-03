import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/validation.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private validationService: ValidationService ,private router: Router) { }

  ngOnInit(): void {
    console.log("homepage")
    this.validationService.checkSession()
  }

  btnClick= function () {
    this.router.navigateByUrl('/coronaform');
};

  
}
