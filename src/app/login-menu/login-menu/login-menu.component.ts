import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ValidationService } from 'src/app/validation.service';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})

export class LoginMenuComponent implements OnInit {

  mail: string = "";
  password: string = "";
  message: string = "";
  router: Router;

  constructor(private validationService:ValidationService) { }

  ngOnInit(): void {
  }

  validateResponses() {
    console.log((this.validationService.validate(this.mail, this.password)));

    this.validationService.validate(this.mail, this.password).subscribe(
      () => {
          this.router.navigate(['header'])
      },
      () => {
          this.message="Gegevens niet correct"
      }
  );

    //if (this.validationService.validate(this.mail, this.password)) this.router.navigate(['header']);
    //else this.message = "Gegevens zijn niet correct";
  }

  validateResponsesDATABASE() {
    let theUrl = "https://www.sodine.nl/" + this.mail + this.password;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
}

