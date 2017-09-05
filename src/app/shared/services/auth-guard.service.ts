import { Injectable } from '@angular/core';

import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from "./auth.service";

import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this._auth.user$
      .map((user) => {
        if ( user ) return true;

        this._router.navigate(['/login'], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      });
  }
}
