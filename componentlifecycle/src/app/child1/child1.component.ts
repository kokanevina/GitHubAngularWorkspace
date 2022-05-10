import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,DoCheck {
  @Input() myCountry:string="";
  @Input() myCities:string[]=[];
  length=0;
  constructor() { 
    console.log("in constructor");
    this.length=this.myCities.length;
  }
  ngOnInit(): void {
    console.log("in ngOnInit.");
    console.log("angular have done creating a component");
    console.log("Called after the constructor & after the first ngOnChanges() ");  
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ngOnChanges");
    console.log(changes);
    for(let pName in changes){
      let change=changes[pName];
      console.log(change.previousValue);
      console.log(change.currentValue);
    }
  }
  ngDoCheck(): void {
   console.log("in ngDoCheck");
   if(this.myCities.length>this.length){
     console.log("change in Array detected");
   }
  }
}
