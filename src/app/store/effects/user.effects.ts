import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as usersActions from '../actions';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap((action) =>
        this.usersService.getUserById(action.id).pipe(
          map((user) => usersActions.loadUserSuccess({ user })),
          catchError((err) => of(usersActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
