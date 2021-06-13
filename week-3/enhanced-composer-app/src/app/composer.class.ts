import { IComposer } from "./composer.interface";

export class Composer {

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return;
  }
}
