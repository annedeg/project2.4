import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ValidationService } from 'src/app/validation.service';
import { rejects } from 'assert';


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
    localStorage.clear();
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
        let result = this.validationService.setSession(this.token)
      }
    })

  }
}

interface Token {
  access_token:string
}
