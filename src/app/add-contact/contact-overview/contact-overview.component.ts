import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-contact-overview',
  templateUrl: './contact-overview.component.html',
  styleUrls: ['./contact-overview.component.scss']
})
export class ContactOverviewComponent implements OnInit {
  
  contactMoments;
  contactMomentsKeys = [
    "ID",
    "User",
    "Contact_Moment",
    "Accepted",
    "Duration",
    "Used_Face_Mask",
    "Washed_Hands",
    "Kept_Distance",
    "Touched_Face"
  
  ]
  constructor(private validation: ValidationService) { }

  ngOnInit(): void {
    this.validation.doGetApiCall("/contactmoments/" + localStorage.getItem("user_id"), localStorage.getItem("token"))
      .then((data) => {
        this.contactMoments =  data;
      }, (err) => {

      })
  }

}