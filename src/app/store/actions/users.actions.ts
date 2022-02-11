import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/interfaces/User.interface';

export const loadUsers = createAction('[Users] Load users');

export const loadUsersSuccess = createAction(
  '[Auth] Load users success',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Auth] Load users error',
  props<{ payload: any }>()
);
