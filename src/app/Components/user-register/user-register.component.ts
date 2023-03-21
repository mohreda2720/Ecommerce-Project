import {FormArray,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { UsersApiService } from 'src/app/Services/users-api.service';
import { IUsers } from 'src/app/Models/iusers';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  userFormGroup: FormGroup;
  newUser: IUsers = {} as IUsers;

  constructor(
    private formBulider: FormBuilder,
    private ApiUserService: UsersApiService
  ) {
    // case no.2
    this.userFormGroup = this.formBulider.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9_.+-]{3,20}@(yahoo|gmail|outlook)(.com)$'
          ),
        ],
      ],
      mobileNo: this.formBulider.array([
        this.formBulider.control('', [Validators.minLength(11)]),
      ]),
      address: this.formBulider.group({
        city: [''],
        street: [''],
        postalCode: [''],
      }),
      password: ['', [Validators.minLength(8), Validators.required]],
      rePassword: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  get fullName() {
    return this.userFormGroup.get('fullName');
  }
  get email() {
    return this.userFormGroup.get('email');
  }

  get mobileNo() {
    return this.userFormGroup.get('mobileNo') as FormArray;
  }

  get city() {
    return this.userFormGroup.get('address')?.get('city');
  }
  get street() {
    return this.userFormGroup.get('address')?.get('street');
  }
  get postalCode() {
    return this.userFormGroup.get('address')?.get('postalCode');
  }
  get password() {
    return this.userFormGroup.get('password');
  }
  get rePassword() {
    return this.userFormGroup.get('rePassword');
  }

  addMobile() {
    this.mobileNo.push(this.formBulider.control(''));
  }
  removeMobile(i: number) {
    this.mobileNo.removeAt(i);
    // formArray.splice(i, 1);
  }
  addUser() {
    const observer = {
      next: (user: IUsers) => {
        alert('user added succefully');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };

    console.log(this.userFormGroup.value);

    this.ApiUserService.addNewUser(this.userFormGroup.value).subscribe(
      observer
    );
  }
}
