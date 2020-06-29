import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-roommate-overview',
  templateUrl: './roommate-overview.component.html',
  styleUrls: ['./roommate-overview.component.scss']
})
export class RoommateOverviewComponent implements OnInit {

  roommates;
  constructor(private validation: ValidationService) { }

  ngOnInit(): void {
    this.validation.doGetApiCall("/roommates/"+localStorage.getItem('user_id'), localStorage.getItem('token'))
      .then((data) => {
        this.roommates = data;        
      }, (err) => {
        console.log(err);
      })
  }
}
