import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {ValidationService} from "../../validation.service";

@Component({
  selector: 'coronaform',
  templateUrl: './coronaform.component.html',
  styleUrls: ['./coronaform.component.scss']
})
export class CoronaFormComponent implements OnInit {

  // List of symptoms for the Corona-virus, as defined by the WHO, along with a number indicating their likelihood to be
  // an indicator for Corona (all set to 1 for now).
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


  constructor(private router: Router, private val: ValidationService) { }

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

  confirmPassword(pass : string) {
    if (pass.length == 0) {
      //Do nothing
    }
    else {
      let formData = new FormData();
      formData.append('email', localStorage.getItem('email'));
      formData.append('password', pass);
      this.val.doPostApiCall('/login', formData, null).then((data) => {
          //password is correct
          this.passwordPage = false;
          this.wrongPassword = false;
          this.coronaConfirmedPage = true;

          //TODO send everyone i have seen in two weeks a notification.


          // let coronaFormData = new FormData();
          // coronaFormData.append('', )
          // this.val.doPostApiCall()

      }, (error) => {
          this.wrongPassword = true;
      });
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

  btnClick= function () {
    this.router.navigateByUrl('/homepage');
  };
}
