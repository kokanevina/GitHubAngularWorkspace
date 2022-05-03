import { Component, OnInit } from '@angular/core';
import { CounterService } from '../logic/counter.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private _counterObject:CounterService) { }
  child1Counter=0;
  ngOnInit(): void {
  }

  incr(){
    this._counterObject.setCounter(); // incrment
    this.child1Counter=this._counterObject.getCounter(); // getting counter
  }
}
