import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  faUser = faUser;
  faHome = faHome;
  faBasket = faShoppingBasket;

  constructor() { }

  ngOnInit(): void {
  }

}
