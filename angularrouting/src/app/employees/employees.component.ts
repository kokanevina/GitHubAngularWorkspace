import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  empArray=[
   new Employee(234,'Hari',78000), 
   new Employee(444,'Prakash',89000),
   new Employee(244,'Simaran',67000)
  ];
 
}
class Employee{
  empId:number;
  empName:string;
  empSalary:number
 
  constructor(empId:number,empName:string,empSalary:number){
    this.empId=empId;
    this.empName=empName;
    this.empSalary=empSalary;
  }

}


