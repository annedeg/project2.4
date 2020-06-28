import {Component, OnInit} from '@angular/core';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-nick-page',
  templateUrl: './nick-page.component.html',
  styleUrls: ['./nick-page.component.scss']
})
export class NickPageComponent implements OnInit {

  notifications = [] // gonna call this allNotifications later when I'm older
  notificationMessage = ""
  received = ""
  confirmationButtons = false
  roommate = ""

  allNotifications = [ //mock data
    [5, 1, "Wed, 17 Jun 2020 15:42:00 GMT", 7, 6, 0],
    [6, 2, "Wed, 24 Jun 2020 20:31:08 GMT", 7, 6, 0],
    [7, 2, "Wed, 24 Jun 2020 21:53:29 GMT", 7, 6, 0],
    [8, 0, "Wed, 24 Jun 2020 21:53:55 GMT", 7, 6, 0],
    [9, 0, "Wed, 24 Jun 2020 21:56:01 GMT", 7, 6, 0],
    [10, 1, "Wed, 24 Jun 2020 21:57:16 GMT", 7, 6, 0]
  ];


  constructor(private service: ValidationService) {
  }

  ngOnInit(): void {
    let formData = new FormData();

    formData.append("password", "c")
    formData.append("new password", "d")

    this.service.doGetApiCall("/notifications/" + localStorage.getItem('user_id'), localStorage.getItem('token'))
      .then((data) => {
          this.notifications.push(data)
          this.service.doGetApiCall("/user/" + localStorage.getItem('user_id'),localStorage.getItem('token'))
            .then((data) => console.log(data), (err) => console.log(err))
        },

        (err) => console.log(err)
      );


    if (this.notifications.length != 0) {
      //add some shit for "no notifications
    }



  }//I'm gonna leave this up here as an exampalel while I work
// sender = data[1] TODO fix the api call
  showNotification(sender, type, received, notificationID) {
    this.received = "Ontvangen om " + received
    this.roommate = sender
    this.readNotification(notificationID)
    switch (type) {
      case 0:
        this.notificationMessage = "U bent in contact gekomen met gebruiker " + sender + ", en deze gebruiker heeft " +
          "aangegeven besmet te zijn met het Corona virus. U heeft nu mogelijk ook een Corona besmetting."
        this.confirmationButtons = false
        break;
      case 1:
        this.notificationMessage = "U heeft een nieuw contactmoment met gebruiker " + sender + ". Als deze gebruiker " +
          "aan geeft een Corona besmetting te hebben opgelopen, dan krijgt u hier een notificatie van."
        this.confirmationButtons = false
        break;
      case 2:
        this.notificationMessage = "Gebruiker " + this.roommate + " heeft aangegeven uw huisgenoot te zijn. Kunt u hieronder " +
          "aangeven of dit klopt?"
        this.confirmationButtons = true
    }
  }

  hideNotification() { //TODO use this
    this.notificationMessage = ""
    this.received = ""
    this.confirmationButtons = false
  }

  confirmRoommate() {
    let roommateMail = null //TODO how the fuck do I get the roommate mail without an api call? I have the roommate id tho
    this.service.doPostApiCall("/roommates" + localStorage.getItem('user_id'), roommateMail,
      localStorage.getItem('token'))
      .then(() => this.notificationMessage = "Kamergenoot bevestigd", (err) => console.log(err))
  }

  denyRoommate() { //TODO something in the lines of a notification type 4 maybe?
    this.notificationMessage = "Ok. Wij zullen een notificatie sturen naar de aanvrager."
  }

  readNotification(notification_id) { //TODO make a patch api call thing
    this.service.doPatchApiCall("/notification" + localStorage.getItem(notification_id),
      null, localStorage.getItem('token'))
  }

}
