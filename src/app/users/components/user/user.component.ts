import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { loadUser } from 'src/app/store/actions';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit, OnDestroy {
  public user!: User;
  public routerSubscription!: Subscription;
  public userSubscription!: Subscription;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });

    this.userSubscription = this.store.select('user').subscribe(({ user }) => {
      const defaultUser: User = {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
      };
      this.user = user || defaultUser;
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
