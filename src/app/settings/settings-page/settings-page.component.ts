import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})

export class SettingsPageComponent implements OnInit {
  usernameEdit : boolean = false;
  deleteConfirmation : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usernameEditToggle() {
    if (this.usernameEdit) {
      this.usernameEdit = false;
    } else {
      this.usernameEdit = true;
    }
  }

  editUsername() {
    //TODO actually change the username if it's available
    this.usernameEditToggle();
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
