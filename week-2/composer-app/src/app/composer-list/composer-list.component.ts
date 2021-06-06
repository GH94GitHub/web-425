import { Component, OnInit } from '@angular/core';

export default class Composer {

fullName: string;
genre: string;

constructor(fullName: string, genre:string) {
  this.fullName = fullName;
  this.genre = genre;
}

}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Fryderyk Chopin', "Classical, Jazz"),
      new Composer('Irving Berlin', 'Stage & Screen, Vocal, Avant-Garde, Classical, Pop/Rock'),
      new Composer('Michael Nyman', 'Stage & Screen, Classical, International, Avant-Garde'),
      new Composer('Robert Schumann', "Classical, Children's"),
      new Composer('Wolfgang Amadeus Mozart', "Classical, Children's")
    ]
   }

  ngOnInit(): void {
  }

}
