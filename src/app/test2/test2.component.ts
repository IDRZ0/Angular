import { Component, OnInit } from '@angular/core';
import { Test2Service } from './services/test2.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  vaccinated: any[] = [];
  vacSize: number = 0;
  unvaccinated: any[] = [];
  unvacSize: number = 0;

  constructor(private service: Test2Service) {
    this.service.getVaccinated().subscribe(v => {
      console.log('vac', v);
      for (var _i = 0; _i < Object.keys(v).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(v)[_i]));
        aux.id = Object.keys(v)[_i];
        this.vaccinated.push(aux);
      }
      this.vacSize = this.vaccinated.length;
    });
    this.service.getUnvaccinated().subscribe(v => {
      console.log('un', v);
      for (var _i = 0; _i < Object.keys(v).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(v)[_i]));
        aux.id = Object.keys(v)[_i];
        this.unvaccinated.push(aux);
      }
      this.unvacSize = this.unvaccinated.length;
    });
  }

  ngOnInit(): void {

  }

  vaccine(event: any) {
    console.log(event);
  }

}
