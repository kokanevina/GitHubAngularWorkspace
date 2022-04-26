import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({});
  constructor() { }
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("",Validators.required),
      emailId:new FormControl("",Validators.required),
      contactNumber:new FormControl("",Validators.required),
      userAge:new FormControl("",[Validators.required, Validators.min(16), Validators.max(55)]),
      userName: new FormControl("",Validators.required),
      password : new FormControl("",[Validators.required, Validators.minLength(6),Validators.maxLength(12)]),
      confirmPassword:new FormControl("",Validators.required)
    });
  }
  
  get age(){
    return this.registerForm.get('userAge');
  }
  get pass(){
    return this.registerForm.get('password');
  }

  submitForm():void{
    console.log(this.registerForm.value);
  }
}
