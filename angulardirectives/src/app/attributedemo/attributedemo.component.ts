import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedemo',
  templateUrl: './attributedemo.component.html',
  styleUrls: ['./attributedemo.component.css']
})
export class AttributedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myHeight='100px';
  bgColor='pink';
  myBg='yellow';

  myStyleObject={
    height:'100px',
    width:'200px',
    backgroundColor:'yellow',
    border:'2px double blue',
    boxShadow:'10px 10px 10px'
  }
  changeBackground():void{
    this.myStyleObject.backgroundColor=this.myBg;
  }
  myStyleArray=['myFont', 'myColor', 'myDimension'];
  choice=0;
  operate():void{
    if(this.choice==1)
      this.myStyleArray.push('myShadow'); 
      else if(this.choice==2)
      this.myStyleArray.pop();     
     } 
  myClassObject={
    'myFont':true,
    'myColor':true,
    'myDimension':true,
    'myShadow':true
  }
}
