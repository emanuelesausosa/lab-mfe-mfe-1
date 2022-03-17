import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'lab-mfe-mfe-1';

  ngOnInit(): void {
    console.log("hello from app component");
  }
}
