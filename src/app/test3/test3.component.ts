import { Component } from '@angular/core';

@Component({
  selector: 'test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {

  name = "Ignacio";
  lastName = "del Rio";

  constructor() { }

  test0(event: any) {
    console.log("Nombre: ", this.name + ' ' + this.lastName);
  }

}
