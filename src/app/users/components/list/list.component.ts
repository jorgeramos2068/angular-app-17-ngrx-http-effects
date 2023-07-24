import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public users: User[] = [];
  constructor() {}

  ngOnInit(): void {}
}
