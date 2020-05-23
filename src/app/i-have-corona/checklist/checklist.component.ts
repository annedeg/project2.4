import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  buttonClicked: Boolean = false;
  coronaConfirmedPage : Boolean = false;
  symptomsPage : Boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showCoronaConfirmed() {
    this.buttonClicked = true;
    this.symptomsPage = false;
    this.coronaConfirmedPage = true;
  }

  showSymptomsList() {
    this.buttonClicked = true;
    this.symptomsPage = true;
  }





}
