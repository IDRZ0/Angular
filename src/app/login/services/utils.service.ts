import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UtilsService {

  private data = new BehaviorSubject<number>(0);

  constructor() { }

  getData(): number {
    return this.data.getValue();
  }

  setData(n: number): void {
    this.data.next(n);
  }

  current(): Observable<number> {
    return this.data.asObservable();
  }

}
