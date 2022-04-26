import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({});
  constructor() { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName: new FormControl(),
      password : new FormControl()
    });
  }
  submitForm():void{
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.userName);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.get('userName')?.value); 
  }
}
