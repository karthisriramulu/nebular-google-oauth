import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {NbAuthService} from "@nebular/auth";
import {Observable} from "rxjs";


@Injectable()

export class LoginService {

    token: boolean = false;
    constructor(private authService: NbAuthService, public http: HttpClient){}

    checTtoken() {
        
        this.authService.isAuthenticated().subscribe((res)=> {
            this.token = res;
        });
        
        if(this.token) {
            return true;
        }
        return false;
    }

    getUser(token:string) : Observable <any> {

        const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
        return this.http.get(url);
    }
}