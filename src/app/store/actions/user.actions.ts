import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/interfaces/User.interface';

export const loadUser = createAction(
  '[User] Load user',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[Auth] Load user success',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[Auth] Load user error',
  props<{ payload: any }>()
);
