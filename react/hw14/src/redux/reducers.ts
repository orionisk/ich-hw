import { createReducer } from '@reduxjs/toolkit';
import { setUserInfo } from './actions';
import { UserState } from '@/types/user';

const initialState: UserState = {
  name: '',
  status: ''
};

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUserInfo, (state, action) => {
    state.name = action.payload.name;
    state.status = action.payload.status;
  });
});

export default userReducer;
