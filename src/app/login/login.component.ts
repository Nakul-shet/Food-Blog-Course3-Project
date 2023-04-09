import { Component } from '@angular/core';

// import { AccountService } from '../services/account.service';

import {Router} from "@angular/router"
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _router : Router , private _accountService : AccountServiceService){
    // if(this._accountService.isLoggedIn()){
    //   this._router.navigate(['/dashboard'])
    // }
  }

  accounts : any = []
  isLoggedIn : boolean = false;

  userObj : any = {
    username : "",
    password : ""
  }

  ngOnInit(){
    this.getAccount();
  }

  login(){

    if(this.userObj.username != "" && this.userObj.password != ""){
      this.accounts.find((acc : any) => {
        if(acc.username === this.userObj.username && acc.password === this.userObj.password){
          sessionStorage.setItem('user' , acc.username)
          sessionStorage.setItem('id' , acc.id)
          sessionStorage.setItem('name' , acc.name)
          this.isLoggedIn = true
          this._router.navigate(['/home'])
        }
      })
    }

    if(this.isLoggedIn === false){
      alert("Invalid Credentials")
      this.userObj.username = "",
      this.userObj.password = ""
    }
    
  }

  getAccount(){
    this._accountService.getAllAccounts().subscribe((result) => {
      this.accounts = result
    })
  }

}
