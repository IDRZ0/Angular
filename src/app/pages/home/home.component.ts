import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { PublicationService } from "../shared/services/publication.service";
import { HomeService } from './services/home.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private publicationService: PublicationService, private homeService: HomeService) { }

  publications: any[] = [];

  ngOnInit(): void {
    this.homeService.currentLoad().pipe(filter(s => s === true)).subscribe(s => this.loadData());
    this.loadData();
  }

  public loadData(): void {
    this.publicationService.getAll().subscribe(res => {
      console.log('RES PUBLICATIONS', res);
      for (var _i = 0; _i < Object.keys(res).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
        aux.id = Object.keys(res)[_i];
        this.publications.push(aux);
      }
    });
  }

}
