import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions';
import { User } from '../../interfaces/User.interface';

export interface UserState {
  id: string;
  user: User | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  id: '',
  user: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  userInitialState,
  on(actions.loadUser, (state, { id }) => ({
    ...state,
    id,
    loading: true,
  })),
  on(actions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user,
  })),
  on(actions.loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
}
