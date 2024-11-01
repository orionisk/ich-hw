import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';

interface UsersState {
  users: User[];
  filter: string;
}

const initialState: UsersState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
  ],
  filter: ''
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  }
});

export const { setFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
