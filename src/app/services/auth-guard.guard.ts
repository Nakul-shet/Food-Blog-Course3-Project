import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  canActivate() : boolean {
      if(sessionStorage.getItem('user') != null){
        return true
      }else{
        return false
      }
  }
  
}
