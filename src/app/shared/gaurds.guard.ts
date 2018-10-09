import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdsGuard implements CanActivate {

  constructor(private router: Router) { }
  
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          if (localStorage.getItem('userToken')) {
              return true;
          }
  
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
      }
}
