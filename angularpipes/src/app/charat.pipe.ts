import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charat'
})
export class CharatPipe implements PipeTransform {
  transform(property: string, ...args: number[]): string {
  let [index]=args;
   let len=property.length
   if(index<len)
   {
    let char= property.charAt(index);
    return char;
   }
   else{
     return "index out of range";
   }
  }
}
/* 
india-is-my-country     titlecase : India-is-my-country
mytitlecase : '-'
India-Is-My-Country
*/