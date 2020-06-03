import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  //First item of array is button text
  //Second item of array is id
  navigation = [["Home", 0], ["Contact",1], ["Overig", 2]]
  currentYear = new Date().getFullYear()
  ngOnInit(): void {
  }
  

  handleClick(id): void {
    switch(id) {
      case 0:
        //handle go to homepage
        break;
      case 1:
        //handle go contact info
        break;
      case 2:
        //handle go overig
        break;
    }
  }

}
