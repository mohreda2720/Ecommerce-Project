import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private userService: UserAuthService) {}

  ngOnInit(): void {
    this.isUserLogged = this.userService.isUserLogged;
    // console.log(this.isUserLogged);
    this.userService.getUserStatus().subscribe((status) => {
      this.isUserLogged = status;
    });
  }
}
