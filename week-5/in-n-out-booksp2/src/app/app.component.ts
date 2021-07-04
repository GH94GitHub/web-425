/*================================
; Title: App Component Class file
; Author: George Henderson
; Date: 04 July 2021
; Description: Contains data for the App component.
;================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment : string;

  constructor() {
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}
