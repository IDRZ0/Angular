import { Component, OnInit } from '@angular/core';
import { PublicationService } from "../shared/services/publication.service";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private publicationService: PublicationService) { }

  publications: any[] = [];

  ngOnInit(): void {
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
