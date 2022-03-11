import { Component, OnInit } from '@angular/core';
import { User } from '../modals/user.modal';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: User[]

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

}
