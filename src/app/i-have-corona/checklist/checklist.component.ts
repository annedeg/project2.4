import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  //List of symptoms for the Corona-virus, as defined by the WHO, a long with a number indicating their likelihood to be
  //an indicator for Corona (all set to 1 for now).
  symptoms  =  [['Koorts', 1],[ 'Droge hoest', 1],['Pijn in het lichaam', 1],['Keelpijn', 1],['Hoofdpijn',1],
    ['Diarree', 1],['Blindvliesontsteking', 1], ['Kortademigheid of ademhalingsproblemen', 1],
    ['Pijn of druk op de borst', 1], ['Aangetast spraak- of bewegingsvermogen', 1]];

  startPage : Boolean = true;
  coronaConfirmedPage : Boolean = false;
  symptomsPage : Boolean = false;
  passwordPage : Boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  confirmPassword() {

  }

  showPassword() {
    this.startPage = false;
    this.symptomsPage = false;
    this.passwordPage = true;
  }
  showCoronaConfirmed() {
    this.passwordPage = false;
    this.coronaConfirmedPage = true;
  }

  showSymptomsList() {
    this.startPage = false;
    this.symptomsPage = true;
  }

  test() {
    console.log("clicked");
  }
}
