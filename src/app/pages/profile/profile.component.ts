import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private authService: NbAuthService, public router: Router, public loginService: LoginService) { }

  ngOnInit(): void {

    this.authService.getToken().subscribe((res: any) => {
      console.log(res);
      if(!res) this.router.navigate([`auth/login`]);
     
      this.loginService.getUser(res.token.access_token).subscribe((user) => {
        this.user = user;
        console.log(user);
      });
      
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate([`auth/login`]);
  }

}
