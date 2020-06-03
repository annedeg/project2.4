import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  usernameEdit : boolean = false;
  deleteConfirmation : boolean = false;

  constructor() { }

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

}
