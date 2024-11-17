/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiLoginOrganizer } from './organizerApi';
import { RootState } from '../../store';
import { loginOragnizerState } from '../../types/organizer.types';

const initialState: loginOragnizerState = {
  email: '',
  password: '',
  isLogged: false,
  message: '',
  role: '',
};

export const selectOrganizerState = (state: RootState) => state.organizer;

export const loginOragnizer = createAsyncThunk('organizer/login',
  async (data: { email: string, password: string, role: string }, { rejectWithValue }) => {
    try {

      const respone = await apiLoginOrganizer(data)
      if (respone.success) {
        localStorage.setItem('token', respone.data.token);
        return respone.data;
      } else {
        return rejectWithValue(respone.message);
      }

    } catch (erorr) {
      return rejectWithValue('Terjadi Kesalahan Saat Login')
    }
  })


const loginOrganizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginOragnizer.fulfilled, (state, action) => {
        state.isLogged = true;
        state.message = 'Login Berhasil';
        state.role = action.payload.role;
      })
      .addCase(loginOragnizer.rejected, (state, action) => {
        state.message = action.payload as string;
      })
  },
});

export const { setMessage, setEmail, setPassword } = loginOrganizerSlice.actions;
export default loginOrganizerSlice.reducer;
