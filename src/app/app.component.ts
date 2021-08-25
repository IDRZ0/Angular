import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
    console.log(this.pure(1, 2));
    console.log(this.impure(1, 2));
  }

  pure(a: number, b: number): number {
    return a + b;
  }

  impure(a: number, b: number): number {
    const aux = Math.random();
    return a + b + aux;
  }

}
