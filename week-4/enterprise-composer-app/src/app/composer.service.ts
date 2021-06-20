/*===========================
; Title: Composer Service
; Author: George Henderson
; Date: 20 June 2021
; Description: Contains composer data and methods to retrieve all
; or single composer based on Id.
;===========================*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId : 10, fullName: 'Fryderyk Chopin', genre: "Classical, Jazz"
      },
      {
        composerId : 11, fullName: 'Irving Berlin', genre: 'Stage & Screen, Vocal, Avant-Garde, Classical, Pop/Rock'
      },
      {
        composerId : 12, fullName: 'Michael Nyman', genre: 'Stage & Screen, Classical, International, Avant-Garde'
      },
      {
        composerId : 13, fullName: 'Robert Schumann', genre: "Classical, Children's"
      },
      {
        composerId : 14, fullName: 'Wolfgang Amadeus Mozart', genre: "Classical, Children's"
      }
    ]
  }

  getComposers() : Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return;
  }

  filterComposers(name : string) : Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
