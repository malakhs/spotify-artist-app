import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { TokenService } from './token-service';
import { AuthService } from './auth.service';

@Injectable()
export class AppRouteGuard implements CanActivate {
debugger;
    constructor(
       private _router: Router,private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isLoggedIn()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }


}