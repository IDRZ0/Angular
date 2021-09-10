import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublicationService {

  url = environment.apiBaseUrl;

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/publications.json`);
  }
}
