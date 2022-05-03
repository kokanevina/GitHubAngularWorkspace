import { Component, OnInit } from '@angular/core';
import { CounterService } from '../logic/counter.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  child2Counter=0;
  constructor(private _cobject:CounterService) { }

  ngOnInit(): void {
  }
  incrmnt()
  {
    this._cobject.setCounter();
    this.child2Counter=this._cobject.getCounter();
  }
}
