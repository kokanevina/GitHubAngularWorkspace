import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './actions/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxdemo';
  mycount$:Observable<number>
  constructor(private myStore:Store<{count: number}>){
    this.mycount$=myStore.select('count');
  }
  appincr() {
    this.myStore.dispatch(increment());
  }
}
