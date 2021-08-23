import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  fakeData = [
    { name: "juan", age: 16, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "A", vaccined: 0, doses: 0 },
    { name: "maria", age: 23, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined: 1, doses: 2 },
    { name: "carla", age: 45, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "C", vaccined: 0, doses: 0 },
    { name: "marco", age: 50, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined: 1, doses: 1 },
    { name: "marta", age: 12, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined: 0, doses: 0 },
    { name: "jorge", age: 36, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined: 1, doses: 3 },
    { name: "maritza", age: 18, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined: 0, doses: 0 },
    { name: "leonardo", age: 35, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "B", vaccined: 0, doses: 0 },
    { name: "ramiro", age: 24, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined: 1, doses: 2 },
    { name: "juana", age: 13, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined: 0, doses: 0 }
  ];

  vacArr = this.fakeData.filter(per => per.vaccined === 1);
  vacSize = this.vacArr.length;
  noVacArr = this.fakeData.filter(per => per.vaccined === 0);
  noVacSize = this.noVacArr.length;

  everybody: boolean = false;

  constructor() {
    this.makeArrays();
  }

  ngDoCheck() {
    this.makeArrays();
    this.checkVac();
  }

  makeArrays() {
    this.vacArr = this.fakeData.filter(per => per.vaccined === 1);
    this.vacSize = this.vacArr.length;
    this.noVacArr = this.fakeData.filter(per => per.vaccined === 0);
    this.noVacSize = this.noVacArr.length;
  }

  checkVac() {
    if (this.vacSize == this.fakeData.length) {
      this.everybody = true;
    }
  }

  vaccinate(event: any) {
    const aux = this.fakeData.find(per => per.name === event);
    const i = this.fakeData.findIndex(per => per === aux);
    this.fakeData[i].doses = this.fakeData[i].doses + 1;
    this.fakeData[i].vaccined = 1;
  }

}
