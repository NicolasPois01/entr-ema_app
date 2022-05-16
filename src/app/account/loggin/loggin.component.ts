import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../modals/user.modal';
import { AuthentificationService } from '../../services/authentification/authentification.service';
import { UserService } from '../../services/user/user.service';

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
    private userService: UserService,
    private router: Router) { }

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
    console.log(formValues);
    console.log(user.email, user.password);
    if (user.email !==''){
      if (user.password === formValues['password']){
        this.authService.currentUser = user;
        this.router.navigate(['/products']);
      }
    }
  }
}
