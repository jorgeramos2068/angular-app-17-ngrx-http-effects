import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions';
import { User } from '../../interfaces/User.interface';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  initialState,
  on(actions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users,
  })),
  on(actions.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function usersReducer(state: any, action: Action) {
  return _usersReducer(state, action);
}
