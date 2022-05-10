import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';

  city='';
  company='';
  employees=['rupali','kishor','poonam'];
  state=true;
  pushele(empName:string){
    if(empName!='')
      this.employees.push(empName);
  }
  
}
