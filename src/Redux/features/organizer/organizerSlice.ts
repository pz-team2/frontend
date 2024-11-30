/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  addOrganizerApi,
  getOrganizersApi,
  deleteOrganizerApi,
  getPaymentReportApi,
  getSearchEvantApi,
} from "./organizerApi";
import { RootState } from "../../store";
import { OrganizerState, Organizer } from "../../types/organizer.types";

const initialState: OrganizerState = {
  organizers: [],
  isOrganizer: false,
  code: 0,
  message: "",
  loading: false,
  paymentReport: null,
  searchResults: [],
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
  "organizer/add",
  async (data: Omit<Organizer, "_id">, { rejectWithValue }) => {
    try {
      const response = await addOrganizerApi(data);
      if (response.success) {
        console.log(response);
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Menambahkan Organizer");
    }
  }
);

// Thunk untuk mendapatkan data Organizer
export const getOrganizers = createAsyncThunk(
  "organizer/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrganizersApi();
      if (response.code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Mengambil Data Organizer");
    }
  }
);

// Thunk untuk menghapus Organizer
export const deleteOrganizer = createAsyncThunk(
  "organizer/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteOrganizerApi(id);
      if (response.success) {
        return id;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Menghapus Organizer");
    }
  }
);

export const getPaymentReport = createAsyncThunk(
  "organizer/paymentReport",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPaymentReportApi();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Mengambil Payment Report");
    }
  }
);

export const getSearchEvant = createAsyncThunk(
  "organizer/searchEvent",
  async (organizerId: string, { rejectWithValue }) => {
    try {
      const response = await getSearchEvantApi(organizerId);
      if (response.code === 200) {
        return response.data;
      } else if (response.code === 500) {
        return rejectWithValue("Terjadi kesalahan server");
      } else {
        return rejectWithValue("Respon tidak valid");
      }
    } catch (error) {
      return rejectWithValue("Gagal Mengambil Data Event");
    }
  }
)

const organizerSlice = createSlice({
  name: "organizer",
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
        state.message = "Berhasil Menambahkan Organizer";
        state.isOrganizer = true;
      })
      .addCase(addOrganizer.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(getOrganizers.fulfilled, (state, action) => {
        state.organizers = action.payload;
        state.message = "Berhasil Mengambil Data Organizer";
      })
      .addCase(getOrganizers.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(deleteOrganizer.fulfilled, (state, action) => {
        state.organizers = state.organizers.filter(
          (organizer) => organizer._id !== action.payload
        );
        state.message = "Berhasil Menghapus Organizer";
      })
      .addCase(deleteOrganizer.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(getPaymentReport.fulfilled, (state, action) => {
        state.paymentReport = action.payload; // Simpan data laporan pembayaran
        state.message = "Berhasil Mengambil Payment Report";
        state.loading = false;
      })
      .addCase(getPaymentReport.rejected, (state, action) => {
        state.message = action.payload as string;
        state.loading = false;
      })
      .addCase(getPaymentReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchEvant.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.message = "Berhasil Mengambil Data Organizer";
      })
      .addCase(getSearchEvant.rejected, (state, action) => {
        state.message = action.payload as string;
      })
  },
});

export const { setMessage } = organizerSlice.actions;
export default organizerSlice.reducer;
