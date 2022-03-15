import { Injectable } from '@angular/core';
import { User } from 'src/app/modals/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 0,
      prenom: 'Prenom1',
      nom: 'Nom1',
      email: 'mail1',
      role: 0,
      password: 'pwd1',
      credit: 0
    },
    {
      id: 1,
      prenom: 'Prenom2',
      nom: 'Nom2',
      email: 'mail2',
      role: 0,
      password: 'pwd2',
      credit: 0
    }
  ]

  defaultUser: User = {
    id: -1,
    prenom: '',
    nom: '',
    email: '',
    role: 0,
    password: '',
    credit: 0
  }

  constructor() { }

  createUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User {
    const user: User | undefined = this.users.find((userObject) => {
      return userObject.id === id;
    });
    if (user) return user;
    else return this.defaultUser;
  }

  getIndexUserById(id: number): number {
    const userIndex: number = this.users.findIndex((userObject) => {
      return userObject.id === id;
    });
    if (userIndex) return userIndex;
    else return -1;
  }

  updateUser(user: User): void {
    const index = this.getIndexUserById(user.id);
    this.users[index] = user;
  }

  deleteUser(id: number): void {
    const index = this.getIndexUserById(id);
    this.users.splice(index - 1, 1);
  }

  addCredit(amont: number, userID: number): void {
    let user = this.getUserById(userID);
    user.credit += amont;
    this.updateUser(user);
  }

  removeCredit(amont: number, userID: number): void {
    let user = this.getUserById(userID);
    if (user.credit >= amont){
      user.credit -= amont;
      this.updateUser(user);
    }
    else {
      console.log("Montant insuffisant");
    }
  }
}
