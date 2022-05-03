import { Component, OnInit } from '@angular/core';
import { CounterService } from '../logic/counter.service';
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers: [CounterService] // now service object is new created and provided to this component
})
export class Child3Component implements OnInit {
  child3Counter=0;
  constructor(private _countObj:CounterService) { }
  ngOnInit(): void {
  }
  get(){
    this._countObj.setCounter();
    this.child3Counter=this._countObj.getCounter();
  }
}
