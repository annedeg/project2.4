import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-nick-page',
  templateUrl: './nick-page.component.html',
  styleUrls: ['./nick-page.component.scss']
})
export class NickPageComponent implements OnInit {

  notifications = [] // gonna call this allNotifications later when I'm older

  constructor(private service: ValidationService) { }

  ngOnInit(): void {
    let formData = new FormData();

    formData.append("password", "c")
    formData.append("new password", "d")

    let allNotification = [
      [5,1,"Wed, 17 Jun 2020 15:42:00 GMT",7],
      [6,2,"Wed, 24 Jun 2020 20:31:08 GMT",7],
      [7,2,"Wed, 24 Jun 2020 21:53:29 GMT",7],
      [8,9,"Wed, 24 Jun 2020 21:53:55 GMT",7],
      [9,3,"Wed, 24 Jun 2020 21:56:01 GMT",7],
      [10,3,"Wed, 24 Jun 2020 21:57:16 GMT",7]
    ];
    console.log(allNotification[0])


    this.service.doGetApiCall("/notifications/" + localStorage.getItem('user_id'), localStorage.getItem('token'))
      .then((data) => this.notifications.push(data), (err) => console.log(err));

    if (this.notifications.length != 0) {
      //add some shit for "no notifications
    }

    this.service.doGetApiCall("/user/" + localStorage.getItem('user_id'),localStorage.getItem('token'))
      .then((data) => console.log(data), (err) => console.log(err))

    this.service.doGetApiCall("/user/" + localStorage.getItem('user_id'),localStorage.getItem('token'))
    .then(
      function(data) {
        console.log(data)
      },
      function(err) {
        console.log(err)
      });
    } //I'm gonna leave this up here as an exampalel while I work


}
