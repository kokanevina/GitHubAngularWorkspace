import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CounterService } from './logic/counter.service';
import { MathserviceService } from './maths/mathservice.service';
import { Child3Component } from './child3/child3.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    HttpComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [MathserviceService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
