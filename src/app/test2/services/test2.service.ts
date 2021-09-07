import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Test2Service {

  url: string = environment.testUrl;

  constructor(private http: HttpClient) { }

  public getVaccinated(): Observable<any> {
    return this.http.get(`${this.url}/vaccinated.json`);
  }

  public getUnvaccinated(): Observable<any> {
    return this.http.get(`${this.url}/unvaccinated.json`);
  }

  public postVaccine(body: any): Observable<any> {
    return this.http.post(`${this.url}/vaccinated.json`, body);
  }

  public patchVaccine(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.url}/vaccinated/${id}.json`, body);
  }

  public deleteUnvaccinated(id: string): Observable<any> {
    return this.http.delete(`${this.url}/vaccinated/${id}.json`);
  }

}
