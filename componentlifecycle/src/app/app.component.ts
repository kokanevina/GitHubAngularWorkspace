import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'componentlifecycle';
  country:string;
  cities=['mumbai','pune'];
  constructor(){
    console.log("in parent constructor");
    
    this.country="INDIA";
  }

}
