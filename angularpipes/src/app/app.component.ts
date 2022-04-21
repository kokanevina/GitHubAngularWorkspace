import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anGularPipes';
  message="welcome to neosoft technologies";
  message1="welcome-to-neosoft-technologies";
  
  sliceObj={
    startIndex:-10,
    endIndex:-2
  }
  
  salary=67890;
  salaries=[78906.64793, 45005.3167, 78999.234,65677.67, 56004.5,67888]

  today=new Date();
}
