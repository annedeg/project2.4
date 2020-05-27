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
    let validated = false;
    mockDetails.forEach(element => {
      if (element[0] == this.mail && element[1]  == this.password) validated = true;
    });
    if (validated) this.result = "Haxx0red";
    else this.result = "Incorrect details";
  }

  validateResponsesDATABASE() {
    let theUrl = "https://www.sodine.nl/" + this.mail + this.password;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}

const mockDetails = [
  ["Anna", "hummer"],
  ["admin", "123"]
];
