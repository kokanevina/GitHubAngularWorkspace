import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({});
  invalidField={
    border:'2px solid red'
  }
  validField={
    border:'2px soild green'
  }
  strongpasswordPattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$";
  constructor() { }
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("",Validators.required), /* pattern : should contain 0 or more alphabets */
      emailId:new FormControl("",[Validators.required,Validators.email]),
      contactNumber:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      userAge:new FormControl("",[Validators.required, Validators.min(16), Validators.max(55)]),
      userName: new FormControl("",Validators.required), /* length : 3 to 15 */
      password : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12), Validators.pattern(this.strongpasswordPattern)]),
      confirmPassword:new FormControl("",Validators.required)
    }, 
    {validators:this.passwordMatch}
    );
  }
  get age(){
    return this.registerForm.get('userAge');
  }
  get pass(){
    return this.registerForm.get('password');
  }
  get mail(){
    return this.registerForm.get('emailId');
  }
  get contact(){
    return this.registerForm.get('contactNumber');
  }
  get cpassword(){
    return this.registerForm.get('confirmPassword');
  }
  submitForm():void{
    console.log(this.registerForm.value);
  }
  private passwordMatch(rForm:FormGroup): any{
    let pass=rForm.get('password').value;
    let cpass=rForm.get('confirmPassword').value;
    if(pass==cpass)
      return null; // validation passed
    else
      return { 'mismatch':true}; 
  }

}
