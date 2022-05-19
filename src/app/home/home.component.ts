import { Type } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { User } from '../modals/user.modal';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
