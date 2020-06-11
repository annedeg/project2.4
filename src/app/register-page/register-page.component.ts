import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    //TODO handle registration with API
  }

  login() {
    this.router.navigate(['login'])
  }
}
