import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent implements OnInit {
  ngOnInit(): void {
  }
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  incr() {
    this.store.dispatch(increment());
  }
  decr() {
    this.store.dispatch(decrement());
  }
  res() {
    this.store.dispatch(reset());
  }
}
