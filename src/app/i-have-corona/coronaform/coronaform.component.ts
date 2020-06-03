import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

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

  startPage: Boolean = true;
  coronaConfirmedPage : Boolean = false;
  symptomsPage : Boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showCoronaConfirmed() {
    this.startPage = false;
    this.symptomsPage = false;
    this.coronaConfirmedPage = true;
  }

  showSymptomsList() {
    this.startPage = false;
    this.symptomsPage = true;
  }

  btnClick= function () {
    this.router.navigateByUrl('/homepage');
  };
}
