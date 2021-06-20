/*===========================
; Title: Composer List Component
; Author: George Henderson
; Date: 20 June 2021
; Description: Contains class data related to Composer List Component.
;===========================*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl("");

  constructor( private composerService : ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(val => this.filterComposers(val))
  }

  ngOnInit(): void {
  }

  filterComposers(name : string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
