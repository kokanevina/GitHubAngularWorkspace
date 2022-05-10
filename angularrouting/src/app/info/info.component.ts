import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  employeeId=0;
  employeeName:string|null;
  infoObj:PersonalInfo | undefined =new PersonalInfo(0,0,'',0);
  constructor(private _activeRoute:ActivatedRoute ) {
    this.employeeName='';
   }
  ngOnInit(): void {
    let id=this._activeRoute.snapshot.paramMap.get('eid');
    this.employeeName=this._activeRoute.snapshot.paramMap.get('ename');
    if(id!=null)
      this.employeeId=parseInt(id);
    this.searchInfo();
  }
  infoArray=[
    new PersonalInfo(234,675685,'Mumbai',9898989898),
    new PersonalInfo(444,654565,'Pune',7878787878,),
    new PersonalInfo(244,234345,'Mumbai',6767676767)
  ]

  searchInfo(){
    this.infoObj=this.infoArray.find(info=>info.empId===this.employeeId);
    console.log(this.infoObj);
    
  }

}
class PersonalInfo{
  empId:number;
  aadharId:number;
  city:string;
  contact:number;
  constructor(empId:number,aadharId:number,city:string,contact:number){
    this.empId=empId;
    this.aadharId=aadharId;
    this.city=city;this.contact=contact;
  }
}