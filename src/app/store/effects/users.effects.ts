import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as usersActions from '../actions';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((err) => of(usersActions.loadUsersError({ payload: err })))
        )
      )
    )
  );
}
