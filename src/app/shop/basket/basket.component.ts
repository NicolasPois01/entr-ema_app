import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket!: any;

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.basket = this.authentificationService.currentUser.basket;
  }

}
