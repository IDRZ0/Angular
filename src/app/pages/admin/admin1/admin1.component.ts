import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.scss']
})
export class Admin1Component implements OnInit {

  name: string = 'ignacio';
  auxJSON = { name: 'ignacio', lastName: 'del rio' };
  auxObs$ = new BehaviorSubject<number[]>([1, 2, 3]);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    const aux = this.auxObs$.getValue();
    const aux1 = aux.concat([4, 5]);
    this.auxObs$.next(aux1);
  }

}
