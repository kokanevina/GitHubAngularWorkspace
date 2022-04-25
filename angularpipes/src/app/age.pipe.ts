import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
//pipe class
export class AgePipe implements PipeTransform {

/*   transform(property:Date, ...arr:any): number {
    console.log("Hello"+property);
     console.log("Parameters"+arr);
    let today=new Date().getTime();
    let bdate=property.getTime();
    let myTime=today-bdate;
    let myAge=(((((myTime/1000)/60)/60)/24)/30)/12;
    let myAge=(((((myTime/1000)/60)/60)/24)/365;
    return myAge;
  } */
  transform(property:Date): number {
    console.log("Hello"+property);
   
    let today=new Date().getFullYear();
    let bdate=property.getFullYear();
    let myAge=today-bdate;
    return myAge;
  }

}
