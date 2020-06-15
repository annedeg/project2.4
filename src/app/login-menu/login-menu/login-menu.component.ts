import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ValidationService } from 'src/app/validation.service';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})

export class LoginMenuComponent implements OnInit {

  mail: string;
  password: string;
  message: string;
  token: Token;
  constructor(private validationService:ValidationService, private router: Router) { }

  ngOnInit(): void {
  }

  registreer() {
    this.router.navigate(['register']);
  }

  validateResponses() {
    this.validationService.validate(this.mail, this.password).catch((error) => error)
    .then((data)=> this.token = <Token> data)
    .then(() => {
      if(this.token.access_token == undefined) {
        this.message = "Gegevens incorrect"
      } else {
        this.validationService.setSession(this.token)
        this.router.navigate(['homepage'])
      }
    })
    .finally(() => this.router.navigate(['homepage']))

  }
}

interface Token {
  access_token:string
}