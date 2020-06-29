import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ValidationService} from "../../validation.service";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})

export class SettingsPageComponent implements OnInit {
  username;
  email;
  deleteConfirmation : boolean = false;

  constructor(private router: Router, private val: ValidationService) {
    this.val.username_public.subscribe((username) => {
      this.username = username;
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }



  deleteConfirmToggle() {
    if (this.deleteConfirmation) {
      this.deleteConfirmation = false;
    } else {
      this.deleteConfirmation = true;
    }
  }

  deletionPasswordCheck(pass : String) {
    if (pass.length == 0) {
      //Do nothing
    }
    else {
      if (pass === "GenericPassword") { //TODO require the actual password
        this.deleteData();
      }
      else {
        //TODO logical way to show that the user filled in a fall password, preferably without another goddamn boolean
      }
    }
  }

  deleteData() {
    //TODO Actually delete the data, and take the user back to the log in page
  }

  changePassword() {
    this.router.navigate(['settings/wijzig-wachtwoord'])
  }

}
