import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brandname="neo";
  ht=50;
  wd=50;
  constructor() { }

  ngOnInit(): void {
  }

  demoFocus(e:any):void{
      console.log("Focus Event");
      console.log(e);
      
  }
  demoBlur():void{
    console.log("Blur Event");
    
  }
  demoChange():void{
    console.log("State changed");
    
  }
  demoSelect():void{
    console.log("text selected..");
  }
  zoomIn():void{
    this.ht=this.ht+20;
    this.wd=this.wd+20;
  }
 
}
