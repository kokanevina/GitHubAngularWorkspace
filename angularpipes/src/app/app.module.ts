import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent, // component
    AgePipe // custom pipe
  ],
  imports: [
    BrowserModule,FormsModule, OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
