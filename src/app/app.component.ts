import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
    div {
      width: 100px;
      height: 100px;
    }
  `]
})
export class AppComponent {
  title = 'Hallo Welt!';
  color = 'red';
  switch = true;
  elemente = [1,2,3,4,5];

  constructor(){
    setTimeout(() => {
      this.color = 'green';
    }, 3000);
  }
}
