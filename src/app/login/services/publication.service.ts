import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublicationService {

  baseUrl: string = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/publications.json`);
  }

  public create(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/publications/.json`, body);
  }

  public update(id: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/publications/${id}.json`, body);
  }

  public patch(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/publications/${id}.json`, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/publications/${id}.json`);
  }

}
