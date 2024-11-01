import { createAction } from '@reduxjs/toolkit';
import { UserState } from '@/types/user';

export const setUserInfo = createAction<UserState>('SET_USER_INFO');
