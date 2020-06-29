import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roommate-overview',
  templateUrl: './roommate-overview.component.html',
  styleUrls: ['./roommate-overview.component.scss']
})
export class RoommateOverviewComponent implements OnInit {

  roommates;
  constructor(private validation: ValidationService, private router: Router) { }

  ngOnInit(): void {
    this.validation.doGetApiCall("/roommates/"+localStorage.getItem('user_id'), localStorage.getItem('token'))
      .then(async (data) => {
        this.roommates = []
        let oef = []
        oef.push(data)
        for await (const item of oef[0]) {
          console.log(item)
            await this.validation.doGetApiCall("/user/username/"+item[2], localStorage.getItem('token'))
              .then((data) => {
                console.log(data)
                let usernameData: NameInfo = <NameInfo> data;
                this.roommates.push(usernameData.name)
               } , (err) => console.log(err))
        }  
      }).then(() => {
        console.log(this.roommates)
      })
  }

  add_roommate() {
    this.router.navigate(['roommates/add'])
  }
}

interface NameInfo {
  name: string
}