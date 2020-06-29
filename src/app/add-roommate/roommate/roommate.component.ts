import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-roommate',
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.scss']
})
export class RoommateComponent implements OnInit {

  id;
  message;
  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {

  }

  toevoegen() {
    this.id;
    let formData = new FormData();
    formData.append("admin password", "superSecretPassword");
    formData.append("notification type", "2");
    formData.append("sendee", this.id);
    this.validationService.doPostApiCall("/notifications/" + localStorage.getItem("user_id"), formData, localStorage.getItem("token")).then(
      (result) => {
        console.log(result)
        this.message = ("request send")
      },
      (err) => {
        console.log("Err: " + err)
        this.message = "Failed";
      }
    )

  }

}
