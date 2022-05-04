import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  vaccineInfo:any={}
  countbyAge={'vac_15_17':0, 'vac_18_45':0, 'vac_45_60':0}
  constructor(private _httpService:HttpClient) { }

  ngOnInit(): void {
  }

   fetchJsonData(){
  this._httpService.get("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=21&district_id=395&date=2022-03-09").
  subscribe((succResponse)=>{
        console.log(succResponse);
        this.vaccineInfo=succResponse;
        console.log(this.vaccineInfo.vaccinationByAge);
        this.countbyAge=this.vaccineInfo.vaccinationByAge;
  }, (errResponse)=>console.log(errResponse));
   }

   fetchJsonData1(){
     
    this._httpService.get("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=21&district_id=395&date=2022-03-09").
    subscribe({
      next:(succResponse)=>{
        console.log(succResponse);
        this.vaccineInfo=succResponse;
        console.log(this.vaccineInfo.vaccinationByAge);
        this.countbyAge=this.vaccineInfo.vaccinationByAge;
      },
      error:(errResponse)=>{console.log(errResponse)}
    });
     }
  
}
