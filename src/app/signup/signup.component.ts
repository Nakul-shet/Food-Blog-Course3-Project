import { Component } from '@angular/core';

import {FormGroup , FormBuilder , Validators} from "@angular/forms"
// import { AccountService } from '../services/account.service';

import {Router} from "@angular/router";
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerForm : FormGroup;
  submitted : boolean = false;

  registrationObj : any = {
    name : '',
    username : '',
    email : '',
    phone : '',
    profession : '',
    password : '',
    confirmPassword : ''
  }

  constructor(private _formbuilder : FormBuilder , private _router : Router , private accountService : AccountServiceService){
    this.registerForm = this._formbuilder.group({
      name : ["" , Validators.required],
      username : ['' , Validators.required],
      email : ['' , Validators.required , Validators.email],
      phone : ['' , Validators.required , Validators.minLength(10) , Validators.maxLength(12)],
      profession : ['' , Validators.required],
      password : ['' , Validators.required , Validators.minLength(6)],
      confirmPassword : ['' , Validators.required]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit() : void{
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }


    this.accountService.createAccount(
      {"name" : this.registrationObj.name,
       "username" : this.registrationObj.username,
       "email" : this.registrationObj.email,
       "phone" : this.registrationObj.phone,
       "password" : this.registrationObj.password,
      }).subscribe((result) => {
        console.log(result)
      })

      this._router.navigate(['/login'])
  }

}
