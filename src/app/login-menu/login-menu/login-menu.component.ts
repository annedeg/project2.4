import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  mail: string = "";
  password: string = "";
  result: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  validateResponses() {
    this.result = this.mail;
  }

}
