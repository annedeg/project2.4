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
  noSymptomsPage : Boolean = false;
  lowSymptomConfirmationPage : Boolean = false;
  wrongPassword : Boolean = false;

  lowSymptoms : number = 3; //arbitrary number of a low symptom count


  constructor() { }

  ngOnInit(): void {
  }

  checkSymptoms() {
    let form: HTMLFormElement = <HTMLFormElement> document.getElementById("symptomsForm");
    let symptomTotal : number = 0;
    for(let i = 0; i < form.length; i++) {
      let htmlInputElement: HTMLInputElement = <HTMLInputElement>form.elements[i]
      if(htmlInputElement.checked == true) {
        symptomTotal += <number> this.symptoms[i][1];
      }
    }
    if (symptomTotal == 0) {
      this.symptomsPage = false;
      this.noSymptomsPage = true;
    }
    else if (symptomTotal < this.lowSymptoms) {
      this.symptomsPage = false;
      this.lowSymptomConfirmationPage = true;
    }
    else {
      this.symptomsPage = false;
      this.passwordPage = true;
    }
  }

  confirmPassword(pass : String) {
    if (pass.length == 0) {
      //Do nothing
    }
    else {
      if (pass === 'defaultPassword') { //todo link up to the DB so we can check with an actual password rather that this default
        this.passwordPage = false;
        this.wrongPassword = false;
        this.coronaConfirmedPage = true;
      }
      else {
        this.wrongPassword = true;
      }
    }
  }

  showStartPage() {
    this.startPage  = true;
    this.coronaConfirmedPage  = false;
    this.symptomsPage  = false;
    this.passwordPage  = false;
    this.noSymptomsPage  = false;
    this.lowSymptomConfirmationPage  = false;
    this.wrongPassword  = false;
  }

  showPassword() {
    this.startPage = false;
    this.symptomsPage = false;
    this.lowSymptomConfirmationPage = false;
    this.passwordPage = true;
  }

  showSymptomsList() {
    this.startPage = false;
    this.symptomsPage = true;
  }
}
