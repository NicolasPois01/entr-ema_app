import { Injectable } from '@angular/core';
import { Product } from 'src/app/modals/product.modal';
import { User } from 'src/app/modals/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 0,
      firstName: 'Prenom1',
      secondName: 'Nom1',
      email: 'mail1',
      role: 0,
      password: 'pwd1',
      credit: 0,
      basket: []
    },
    {
      id: 1,
      firstName: 'Prenom2',
      secondName: 'Nom2',
      email: 'mail2',
      role: 1,
      password: 'pwd2',
      credit: 0,
      basket: []
    }
  ]

  defaultUser: User = {
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

  getUserByEmail(email: string): User {
    const user: User | undefined = this.users.find((userObject) => {
      return userObject.email === email;
    })
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

  addProductToBasket(product: Product, quantity: number, idUser: number): void {
    const newBasketItem = {
      product: product,
      quantity: quantity
    };
    const index = this.getIndexUserById(idUser);
    if (index != -1){
      this.users[index].basket.push(newBasketItem);
    }
  }
}
