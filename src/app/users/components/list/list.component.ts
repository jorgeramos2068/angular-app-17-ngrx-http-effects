import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
