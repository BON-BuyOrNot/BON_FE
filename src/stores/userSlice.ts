import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: '',
  name: '',
  email: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Omit<UserState, 'isLoggedIn'>>) {
      const { id, name, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.id = '';
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
    updateUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
