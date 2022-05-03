import { Component } from '@angular/core';
import { MathserviceService } from './maths/mathservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _mathsobject:MathserviceService){
  }
  no1:number=0;
  no2:number=0
  result=0;
  action(act:string){
    switch(act)
    {
      case 'add':
        this.result=this._mathsobject.addNumbers(this.no1,this.no2);
        break;
      case 'subtract':
        this.result=this._mathsobject.subtractNumbers(this.no1,this.no2);
    } 
  }
  action1(act:string,input1:string,input2:string){
   let number1=parseFloat(input1);
   let number2=parseFloat(input2);
    switch(act)
    {
      case 'add':
        this.result=this._mathsobject.addNumbers(number1,number2);
        break;
      case 'subtract':
        this.result=this._mathsobject.subtractNumbers(number1,number2);
    } 
  }
}
