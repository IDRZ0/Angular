import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
      <p class="hola">admin2</p>
      <button (click)="testParams()">Test</button>
      <p>{{test1 ?? test2}}</p>
      <p>{{test1 || test2}}</p>
      <p>{{ 10 | exponent }}</p>
  `,
  styles: [
    `
    .hola{
      background-color: yellow;
    }
    `
  ]
})
export class Admin2Component implements OnInit {

  test1 = 0;
  test2 = "ignacio";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * comments
   */
  public testParams(name?: string, lastName: string = 'Delrio'): string {
    const aux = 'nacho';
    console.log(name + ' ' + lastName);
    console.log((name ?? aux) + ' ' + lastName);
    return name + ' ' + lastName;
  }

}
