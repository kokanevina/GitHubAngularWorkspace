import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnInit, OnChanges,DoCheck, OnDestroy{
  state:string;
  @Input() myCity='';
  @Input() myCompany='';
  @Input() myEmployees:string[]=[];
  arrLength=0;
  constructor() {
    console.log("in child constructor");
    // only for constructor injections
   this.state="";
   }
  
  ngOnInit(): void {
    console.log("in ngOnInit");
    this.state="Maharshtra";
    this.arrLength=this.myEmployees.length;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ngOnChanges");
    console.log(changes);
    for(let property in changes){
       let change=changes[property];
       console.log(change.previousValue);
       console.log(change.currentValue);    
    }
    /* let change1=changes[this.myCity];
    let change2=changes[this.myCompany]; */
  }
  ngDoCheck(): void {
    console.log("in ngDoCheck");
    if(this.arrLength!=this.myEmployees.length){
      console.log("change in array detected");
      this.arrLength=this.myEmployees.length;
    }
  }
  ngOnDestroy(): void {
    console.log("in ngOnDestroy");
    
  }
}
