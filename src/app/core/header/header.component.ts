import { Component, OnInit } from '@angular/core';
import { User, Role } from '../_models';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '../_services';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  socialUser: SocialUser;
  ngOnInit() {
    this.socialUser = this.userService.getSocialUser();

  }

 

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  get isUser() {
    return this.currentUser && this.currentUser.role === Role.User;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
