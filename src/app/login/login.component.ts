import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from './services/publication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formReactive: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ''
    })
  }

  ngOnInit(): void {
    console.log('IGNACIO DEL RIO');
  }

  getValue(value: string) {
    return this.formReactive.get(value);
  }

}
