import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// component class
export class AppComponent {
  title = 'anGularPipes';
  message="welcome to neosoft technologies";
  message1="welcome-to-neosoft-technologies";
  
  sliceObj={
    startIndex:-10,
    endIndex:-2
  }
  
  salary=67890;
  salaries=[78906.64793, 45005.3167, 78999.234,65677.67, 56004.5,67888]

  today=new Date();

   birthDate =new Date('19 Jan 2009');
  trainArray=[
    new Train(111,'Local','Trans-Harbour',new Date('12 Dec, 1995'),100), 
    new Train(211,'Local','Harbour',new Date('12 Dec, 1990'),80),
    new Train(110,'Local','cenral',new Date('12 Jan, 1990'),120),
    new Train(121,'Local','Western',new Date('10 dec, 1990'),50),
    new Train(121,'Local','Central',new Date('10 Dec, 1990'),50),
  ]

  colName='tId';
  desc=false;
  insensitive=true;

  
  arraySort(property:string){
    this.colName=property;
  }
}
class Train{
  tId: number;
  tType:string;
  tRoute: string;
  constructDate: Date;
  tTicket: number;

  constructor(tId:number,tType:string,tRoute:string,constructDate:Date,tTicket:number)
  {
    this.tId=tId;
    this.tRoute=tRoute;
    this.tTicket=tTicket;
    this.tType=tType;
    this.constructDate=constructDate;
  }


}