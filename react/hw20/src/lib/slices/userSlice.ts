import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      name: 'Иван Иванов',
      email: 'ivan@example.com',
      role: 'Администратор'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      email: 'maria@example.com',
      role: 'Пользователь'
    },
    {
      id: 3,
      name: 'Алексей Сидоров',
      email: 'alex@example.com',
      role: 'Модератор'
    }
  ]
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    }
  }
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
