import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  isUserLogged: boolean = false;
  user = { email: '', password: '' };
  constructor(private userService: UserAuthService) {}
  ngOnInit(): void {
    this.isUserLogged = this.userService.isUserLogged;
  }
  login() {
    if (
      this.user.email.match(
        "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*"
      ) &&
      this.user.password.match(
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
      )
    ) {
      this.userService.LogIn('UserName', 'Password');
      this.isUserLogged = this.userService.isUserLogged;
    } else {
      alert('Invalid email or password');
    }
  }

  logout() {
    this.userService.logOut();
    this.isUserLogged = this.userService.isUserLogged;
  }
}

