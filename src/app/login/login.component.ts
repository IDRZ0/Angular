import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = new FormControl('efe');
  formReactive: FormGroup;

  constructor(private publicationService: PublicationService, private formBuilder: FormBuilder) {
    this.formReactive = this.formBuilder.group({
      name: '',
      lastName: ['',[Validators.required]],
      date: '',
    });
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(res => {
      console.log('name', res);
    });

    this.formReactive.valueChanges.subscribe(res => {
      console.log('form', res);
    });

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

  onSubmitTemplate(values: any) {
    console.log(values);
  }

  onShow() {
    console.log(this.name.value);
  }

  onShowAll(){
    console.log('FFFF',this.formReactive.value);
  }

}
