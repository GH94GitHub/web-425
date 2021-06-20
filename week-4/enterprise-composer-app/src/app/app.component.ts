/*===========================
; Title: App Component
; Author: George Henderson
; Date: 20 June 2021
; Description: Contains data for App Component.
;===========================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Assignment 4.4 - Async Pipe';
}
