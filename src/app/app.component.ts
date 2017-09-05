import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _auth: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {
    _auth.user$
      .subscribe((user) => {
        if ( user ) {
          _userService.save(user);
          
          let returnUrl = localStorage.getItem('returnUrl');
  
          if ( returnUrl ) {
            localStorage.removeItem('returnUrl');
            _router.navigateByUrl(returnUrl);
          } else {
            return;
          }
        } else {
          return;
        }
      });
  }
}
