import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './reducer/counter.reducer';
import { MycounterComponent } from './mycounter/mycounter.component';
@NgModule({
  declarations: [
    AppComponent,
    MycounterComponent
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({count:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
