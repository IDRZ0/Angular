import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  id = 1;
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private router: Router) {
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

  goAdminTS() {
    this.router.navigate(['admin/admin2', this.id, 'f', 33]);
  }

}
