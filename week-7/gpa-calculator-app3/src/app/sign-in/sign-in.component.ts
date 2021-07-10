/*============================
; Title: Sign-in Component Class File
; Author: George Henderson
; Date: 04 July 2021
; Description: Contains data for the Sign-in component.
;============================*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm : FormGroup = {} as FormGroup;
  errorMessage : string = '';

  constructor(
    private signinService : SignInService,
    private router : Router,
    private fb : FormBuilder,
    private cookieService : CookieService
  ) {

  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId : ''
    })
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    }
    else {
      this.errorMessage = "Failed to sign you in"
    }
  }

}
