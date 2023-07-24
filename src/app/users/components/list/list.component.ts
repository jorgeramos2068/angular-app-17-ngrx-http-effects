import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from 'src/app/interfaces/User.interface';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public users: User[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users }) => (this.users = users));

    this.store.dispatch(loadUsers());
  }
}
