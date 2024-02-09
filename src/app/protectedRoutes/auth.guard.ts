import { CanActivateFn } from '@angular/router';
// import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 return localStorage.getItem("datastored")==='user'
 
  
};


