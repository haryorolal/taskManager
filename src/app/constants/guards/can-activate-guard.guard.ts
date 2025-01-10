import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

export const canActivateGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) : boolean => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  const jwtHelperService = inject(JwtHelperService)

  let token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") || "{}").token : null;
  let decodedRole = jwtHelperService.decodeToken(token).role;
  let expectedRole = route.data["expectedRole"];

  console.log(router.url)
  console.log(`decoded role is ${decodedRole} === expected role is ${expectedRole}`);

  if (loginService.isAuthenticated() && decodedRole === expectedRole) {
    return true //user can navigate to other routes
  } else {
    router.navigate(["/auth/login"])
    return false //user cannot navigate to other routes
  }
};
