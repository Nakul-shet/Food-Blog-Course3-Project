import { Component } from '@angular/core';
// import { AccountServiceService } from '../services/account-service.service';

import {Router} from "@angular/router"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private _router : Router){}

  isLoggedIn() : boolean{
    if(sessionStorage.getItem('user') != null){
      return true
    }else{
      return false
    }
  }

  handleLoout(){

    alert("Are you sure you want to log out?")

    sessionStorage.removeItem("user")
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("name")

    this._router.navigate(['/landing'])
  }

}
