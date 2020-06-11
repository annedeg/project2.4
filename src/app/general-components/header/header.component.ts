import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginName = "Generic First Name"
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['login'])
  }

  settings() { 
    console.log(" d")
    this.router.navigate(['settings'])
  }

  ngOnInit(): void {
  } 
}
