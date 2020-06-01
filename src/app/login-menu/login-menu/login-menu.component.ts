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

  constructor(private validationService:ValidationService, private router: Router) { }

  ngOnInit(): void {
  }

  validateResponses() {
    this.validationService.validate(this.mail, this.password).subscribe(
      () => {
          this.router.navigate(['header'])
      },
      () => {
          this.message="Gegevens niet correct"
      }
    );
  }

  validateResponsesDATABASE() {
    let theUrl = "https://www.sodine.nl/" + this.mail + this.password;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
}

