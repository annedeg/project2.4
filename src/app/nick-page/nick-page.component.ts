import {Component, OnInit} from '@angular/core';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-nick-page',
  templateUrl: './nick-page.component.html',
  styleUrls: ['./nick-page.component.scss']
})
export class NickPageComponent implements OnInit {

  allNotifications = []
  notificationMessage = ""
  received = ""
  confirmationButtons = false
  roommateID = ""


  constructor(private service: ValidationService) {
  }

  ngOnInit(): void {
    let formData = new FormData();

    formData.append("password", "c")
    formData.append("new password", "d")

    this.service.doGetApiCall("/notifications/" + localStorage.getItem('user_id'), localStorage.getItem('token'))
      .then((data) => {
          this.allNotifications.push(data)
        },

        (err) => console.log(err)
      );


    if (this.allNotifications.length != 0) {
      //add some shit for "no notifications"
    }



  }//I'm gonna leave this up here as an exampalel while I work

  showNotification(sender, type, received, notificationID, senderID) {
    this.received = "Ontvangen om " + received
    this.roommateID = senderID
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
        this.notificationMessage = "Gebruiker " + sender + " heeft aangegeven uw huisgenoot te zijn. Kunt u " +
          "hieronder aangeven of dit klopt?"
        this.confirmationButtons = true
    }
  }

  hideNotification() { //TODO use this
    this.notificationMessage = ""
    this.received = ""
    this.confirmationButtons = false
  }

  confirmRoommate() {
    let formData = new FormData()
    formData.append("roommate", this.roommateID.toString())
    this.service.doPostApiCall("/roommates/" + localStorage.getItem('user_id'), formData,
      localStorage.getItem('token'))
      .then(() => this.notificationMessage = "Kamergenoot bevestigd", (err) => console.log(err))
  }

  denyRoommate() { //TODO something in the lines of a notification type 4 maybe?
    this.notificationMessage = "Ok. Wij zullen een notificatie sturen naar de aanvrager."
  }

  readNotification(notification_id) {
    let formData = new FormData()
    formData.append("notification", notification_id.toString())
    this.service.doPutApiCall("/notification/read", formData, localStorage.getItem('token'))
      .then(() => console.log("notification gelezen"), (err) => console.log(err))
  }

}