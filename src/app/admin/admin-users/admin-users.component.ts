import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../modals/user.modal'

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})


export class AdminUsersComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  showRole(value: number): string {
    switch (value){
      case 0: return 'Non adhérent';
      
      case 1: return 'Adhérent';

      case 2: return 'Administrateur';

      default: return 'Non défini';
    }
  }

  switchRole(value: number, userID: number): void {
    let user = this.userService.getUserById(userID);
    switch (value){
      case 0: user.role = 1;
      break;

      case 1: user.role = 0;
      break;
    }
    this.userService.updateUser(user);
  }

  navigate(userID: number){
    this.route.navigate(['/admin/users/credit/' + userID])
  }
}
