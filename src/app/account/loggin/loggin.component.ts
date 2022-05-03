import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../modals/user.modal';
import { AuthentificationService } from '../../services/authentification/authentification.service';
import { UserService } from '../../services/user/user.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  form!: FormGroup;

  users!: User []

  constructor(private authService: AuthentificationService,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }


  onSubmit(): void {
    const formValues = this.form.value;
    const user: User = this.userService.getUserByEmail(formValues['email']);
    if (user.email !==''){

    }
  }
}
