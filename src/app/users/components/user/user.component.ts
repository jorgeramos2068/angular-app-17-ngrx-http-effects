import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import { loadUser } from 'src/app/store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      console.log(id);
      this.store.dispatch(loadUser({ id }));
    });
  }
}
