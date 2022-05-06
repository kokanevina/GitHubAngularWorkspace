import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() 
  comName='';
  @Input()
  styleObj={};
  @Output()
  eventEmitter1 : EventEmitter<String>=new EventEmitter<String>();
  location='';
  @Output()
  eventEmitter2 : EventEmitter<string>=new EventEmitter<string>(); 
  constructor() { }
  ngOnInit(): void {
  }
  pass1(){
    this.eventEmitter1.emit(this.location);
  }
 pass2(){
    console.log("pass2 function called");   
    this.eventEmitter2.emit(this.comName);
  } 
}
