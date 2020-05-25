import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor() { 
  }
  notification = [["besmet", 0], ["contactmoment", 1],["huisgenoot", 2]];

  ngOnInit(): void {
  }

   handleClick(id): void {
     switch(id) {
       case 0:
         //Open besmet pagina
         break;
       case 1:
         //Open contactmoment toegevoegd pagina
         break;
       case 2:
         //Open Huisgenoot toegevoegd pagina
         break;
     }
   }

}
