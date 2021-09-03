import { Component, OnInit } from '@angular/core';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.publicationService.getAll().subscribe(res => {
      console.log('res', res);
    });
  }

  public crear() {
    this.publicationService.create({
      "date": "01/01/2000",
      "description": "efe",
      "idUser": 4,
      "imageUrl": "http://firebase/efe.jpg",
      "userPhotoUrl": "http://firebase/f.jpg"
    }).subscribe(res => {
      console.log('res', res);
    });
  }

  public update() {
    this.publicationService.update('p0001', {
      "date": "01/01/2000",
      "description": "efe",
      "idUser": 1,
      "imageUrl": "http://firebase/efe.jpg",
      "userPhotoUrl": "http://firebase/f.jpg"
    }).subscribe(res => {
      console.log('res', res);
    });
  }

  public patch() {
    this.publicationService.patch('-MicUGkJvpuKIARdCNtb', {
      "imageUrl": "http://firebase/efe1.jpg",
      "userPhotoUrl": "http://firebase/f.jpg"
    }).subscribe(res => {
      console.log('res', res);
    });
  }

  public delete() {
    this.publicationService.delete('MicUGkJvpuKIARdCNtb').subscribe(res => {
      console.log('res', res);
    });
  }

  onSubmitTemplate(values:any){
    console.log(values);
  }

}
