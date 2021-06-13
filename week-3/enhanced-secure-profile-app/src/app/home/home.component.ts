import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';

  constructor() {
    }

  ngOnInit(): void {
  }

}
