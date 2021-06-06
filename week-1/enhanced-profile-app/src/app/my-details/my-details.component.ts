import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood:  string;
  favoriteColor: string;

  keywords = [
    '#TypeScript', '#2020', '#CodingWIthAngular', '#ngOmaha'
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person('George Henderson', 'Chicken', 'Black')
   }


  ngOnInit(): void {
  }

}
