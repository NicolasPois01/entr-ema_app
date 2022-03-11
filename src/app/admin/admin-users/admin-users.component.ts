import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../modals/user.modal'

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})


export class AdminUsersComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
