import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase'
})
export class MytitlecasePipe implements PipeTransform {

  transform(myTitile: string, ...args: string[]): string {
    let [delimiter]=args;
    let splitTitle = myTitile.split(delimiter);
    let newarr=splitTitle.map(ele => ele.charAt(0).toUpperCase() + ele.substring(1));
    let myString=newarr.join(delimiter);
    return myString; 
  }
}
