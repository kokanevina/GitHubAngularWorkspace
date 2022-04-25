import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { CharatPipe } from './charat.pipe';
import { MytitlecasePipe } from './mytitlecase.pipe';

@NgModule({
  declarations: [
    AppComponent, // component
    AgePipe, CharatPipe, MytitlecasePipe // custom pipe
  ],
  imports: [
    BrowserModule,FormsModule, OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
