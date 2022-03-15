import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { User } from 'src/app/modals/user.modal';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-credit',
  templateUrl: './admin-credit.component.html',
  styleUrls: ['./admin-credit.component.scss']
})
export class AdminCreditComponent implements OnInit {

  user!: User;

  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUserById(+this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      action: 'add',
      amount: 0
    });
  }

  onSubmit(): void {
    const formValues = this.form.value;
    console.log(formValues);
    if (formValues['amount'] > 0) {
      if (formValues['action'] === 'add'){
        this.userService.addCredit(+formValues['amount'], this.user.id);
      }
      else if (formValues['action'] === 'remove'){
        this.userService.removeCredit(+formValues['amount'], this.user.id);
      }
      this.router.navigate(['/admin/users']);
    }
    else{
      console.log('Montant invalide');
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/users']);
  }

  showRole(value: number): string {
    switch (value){
      case 0: return 'Non adhérent';
      
      case 1: return 'Adhérent';

      case 2: return 'Administrateur';

      default: return 'Non défini';
    }
  }
}
