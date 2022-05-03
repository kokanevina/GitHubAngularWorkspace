import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // it is available to all components in application where u want to inject it
  // on requirement serivce object will be created only one and injected in components
})
export class MathserviceService {
  constructor() { }
  addNumbers(num1:number,num2:number){
    return num1+num2;
  }
  subtractNumbers(num1:number,num2:number){
    return num1-num2;
  }
  multiplyNumbers(num1:number,num2:number){
    return num1*num2;
  }
  divideNumbers(num1:number,num2:number){
    return num1/num2;
  }
}
