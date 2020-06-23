import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ValidationService} from "../../validation.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-menu.component.html',
  styleUrls: ['./register-menu.component.scss']
})
export class RegisterMenuComponent implements OnInit {

  constructor(private router: Router, private val: ValidationService) { }
  username:string;
  mail:string;
  password2:string;
  password:string;
  ding:Object;
  message: String;

  colour: string;

  ngOnInit(): void {
  }

  register() {
    let formdata = new FormData();
    formdata.set("username", this.username);
    formdata.set("email", this.mail);
    formdata.set("password", this.password);

    this.val.doPostApiCall('/user', formdata, localStorage.getItem('token')).then((data) => {
      let result: string = (data[Object.keys(data)[0]])
      if(result.toLowerCase() === "user added") {
        this.colour = "green";
        this.message = "User has been added";
      } else {
        this.colour = "red";
        this.message = "Something went wrong. Please try again"
      }
    })
  }

  login() {
    this.router.navigate(['login'])
  }
}
