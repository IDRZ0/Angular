import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTransactions(): Observable<any> {
    return this.http.get(`${this.url}/transactions.json`);
  }

  public createTransactions(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public updateTransactions(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }

  public deleteTransactions(id: string): Observable<any> {
    return this.http.delete(`${this.url}/transactions/${id}.json`);
  }

  public getWallets(): Observable<any> {
    return this.http.get(`${this.url}/wallets.json`);
  }

  public updateWallet(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.url}/wallets/${id}.json`, body);
  }

}
