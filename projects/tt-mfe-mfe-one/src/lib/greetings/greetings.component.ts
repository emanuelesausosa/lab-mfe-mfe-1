import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("hello from greetings!")
  }

}
