import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private _http : HttpClient) { }

  getAllAccounts(){
    return this._http.get('http://localhost:3001/accounts')
  }

  createAccount(accountDetails : any){
    return this._http.post('http://localhost:3001/accounts' , accountDetails)
  }


}
