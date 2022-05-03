import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/user.modal';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName:'',
      secondName:'',
      email:'',
      password:''
    })
  }

  onSubmit(): void {
    const formValues = this.userForm.value;
    // Check mail unicity
    if (this.userService.getUserByEmail(formValues['email']).id === -1){
      let newUser: User = {
        id: this.userService.users[this.userService.users.length - 1].id + 1,
        firstName: formValues['firstName'],
        secondName: formValues['secondName'],
        email: formValues['email'],
        password: formValues['password'], //PASSWORD HAS TO BE HASHED
        role: 0,
        credit: 0,
        basket: []
      }
      this.userService.createUser(newUser);
      this.router.navigate(['/users']);
    }
  }
}
