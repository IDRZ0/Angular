import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  msg: string = "";

  constructor() { }

  getMsg(): string {
    return this.msg;
  }

  setMsg(msg: string): void {
    this.msg = msg;
  }
  
}
