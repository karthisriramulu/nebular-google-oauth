import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../services/login.service";


@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
     return this.loginService.checTtoken();
    }

}