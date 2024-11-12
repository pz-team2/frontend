/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { OrganizerState, Organizer } from '../type';
import { addOrganizerApi, getOrganizersApi, deleteOrganizerApi } from './organizerApi';
import { RootState } from '../../store';

const initialState: OrganizerState = {
  organizers: [],
  isOrganizer: false,
  message: '',
  loading: false,
};

export const selectOrganizerState = (state: RootState) => state.organizer;

// Memoize bagian yang diambil
export const selectOrganizerErrorAndLoading = createSelector(
  [selectOrganizerState],
  (organizerState: OrganizerState) => ({
    error: organizerState.message,
    loading: organizerState.loading,
  })
);

// Selector untuk mengakses message secara langsung
export const selectOrganizerMessage = createSelector(
  [selectOrganizerState],
  (organizerState: OrganizerState) => organizerState.message
);

// Thunk untuk menambah Organizer
export const addOrganizer = createAsyncThunk(
  'organizer/add',
  async (data: Omit<Organizer, '_id'>, { rejectWithValue }) => {
    try {
      const response = await addOrganizerApi(data);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue('Gagal Menambahkan Organizer');
    }
  }
);

// Thunk untuk mendapatkan data Organizer
export const getOrganizers = createAsyncThunk(
  'organizer/list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrganizersApi();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue('Gagal Mengambil Data Organizer');
    }
  }
);

// Thunk untuk menghapus Organizer
export const deleteOrganizer = createAsyncThunk(
  'organizer/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteOrganizerApi(id);
      if (response.success) {
        return id;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue('Gagal Menghapus Organizer');
    }
  }
);

const organizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrganizer.fulfilled, (state, action) => {
        state.organizers.push(action.payload);
        state.message = 'Berhasil Menambahkan Organizer';
        state.isOrganizer = true;
      })
      .addCase(addOrganizer.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(getOrganizers.fulfilled, (state, action) => {
        state.organizers = action.payload;
        state.message = 'Berhasil Mengambil Data Organizer';
      })
      .addCase(getOrganizers.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(deleteOrganizer.fulfilled, (state, action) => {
        state.organizers = state.organizers.filter((organizer) => organizer._id !== action.payload);
        state.message = 'Berhasil Menghapus Organizer';
      })
      .addCase(deleteOrganizer.rejected, (state, action) => {
        state.message = action.payload as string;
      });
  },
});

export const { setMessage } = organizerSlice.actions;
export default organizerSlice.reducer;
