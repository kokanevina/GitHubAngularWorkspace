import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counter=0;
  setCounter(){
    this.counter++;
  }
  getCounter(){
    return this.counter;
  }
}
