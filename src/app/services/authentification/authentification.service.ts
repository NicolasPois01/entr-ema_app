import { Injectable } from '@angular/core';
import { User } from 'src/app/modals/user.modal';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isAuth: boolean = false;

  currentUser: User = {
    id: -1,
    firstName: '',
    secondName: '',
    email: '',
    role: 1,
    password: '',
    credit: 0,
    basket: []
  }

  constructor() { }
}
