import { Component, OnInit } from '@angular/core';

import { AppUser } from "../../../shared/models/app-user";
import { Cart } from '../../../shared/models/cart';

import { Observable } from 'rxjs/Observable';

import { AuthService } from "../../../shared/services/auth.service";
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<Cart>;

  constructor(
    private _auth: AuthService,
    private _cartService: CartService
  ) {}

  async ngOnInit() {
    this._auth.appUser$
      .subscribe((appUser) => this.appUser = appUser);

    this.cart$ = await this._cartService.get();
  }
  
  logout() {
    this._auth.logout();
  }
}
