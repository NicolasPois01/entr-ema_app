import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})

export class NavbarUserComponent implements OnInit {
  faUser = faUser;
  faHome = faHome;
  faBasket = faShoppingBasket;

  constructor() { }

  ngOnInit(): void {
  }

}
