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
  everybody: boolean = (this.unvacSize === 0);

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

  vaccine(id: string) {
    console.log(id);
    var aux = this.unvaccinated[0];
    for (var _i = 0; _i < this.unvacSize; _i++) {
      if (this.unvaccinated[_i].id === id) {
        aux = this.unvaccinated[_i];
      }
    }
    console.log(aux);
    var dose = aux.doses;
    console.log(dose);
    if (aux.vaccineType = "C" && aux.doses < 2) {
      this.service.patchVaccine(id, { "doses": dose++ });
    } else if (aux.vaccineType = "B" && aux.doses < 1) {
      this.service.patchVaccine(id, { "doses": dose++ });
    } else {
      aux.doses++;
      aux.vaccine = 1;
      this.service.deleteUnvaccinated(id);
      this.service.postVaccine(aux);
    }
  }

}
