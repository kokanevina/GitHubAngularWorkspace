import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyName='';
  myStyle={
    border:'2px solid red',
    backgroundColor:'yellow'
  }
  loc='';
  accept1(ev:any){
    this.loc=ev;
    console.log(this.loc);
  }
  accept2(ev:any){
    console.log(ev);
    console.log("in accept2");
    this.companyName=ev;
   
  }
}
