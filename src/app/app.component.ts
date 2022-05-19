import { Component, OnInit } from '@angular/core';
import { User } from './modals/user.modal';
import { AuthentificationService } from './services/authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'entrema';
  currentUser!: User

  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authentificationService.currentUser;
    console.log(this.currentUser);
  }
}
