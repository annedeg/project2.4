import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginName = "Generic First Name"
  constructor() { }

  logout() {
    localStorage.removeItem("token");
  }

  ngOnInit(): void {
    console.log("see mee")
  }
}
