import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getTicketsByUserId, getTicketByPaymentId } from "./ticketApi";
import { TicketState } from "../../types/tiket.type";

const initialState: TicketState = {
  tickets: [],
  isTicket: false,
  message: "",
  loading: false,
};

export const fetchTicketsByUserId = createAsyncThunk(
  "tickets/fetchByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTicketsByUserId();
      if (response) {
        return response;
      } else {
        return rejectWithValue("Gagal Mengambil Data Tiket");
      }
    } catch (error) {
      console.log("Terjadi kesalahan saat mengambil data transaksi.");
    }
  }
);

export const fetchTicketsByPaymentId = createAsyncThunk(
  "tickets/fetchByPaymentId",
  async (paymentId: string, { rejectWithValue }) => {
    try {
      const response = await getTicketByPaymentId(paymentId);
      if (response) {
        return response; // Mengembalikan data detail tiket
      } else {
        return rejectWithValue("Gagal Mengambil Detail Tiket");
      }
    } catch (error) {
      console.log("Terjadi kesalahan saat mengambil data transaksi.");
    }
  }
);

const ticketSlice = createSlice({
  name: "Ticket",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handler untuk fetchTicketsByUserId
      .addCase(fetchTicketsByUserId.pending, (state) => {
        state.loading = true;
        state.message = "";
      })
      .addCase(fetchTicketsByUserId.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.loading = false;
        state.message = "Berhasil Mengambil Data Tiket Berdasarkan Id User";
      })
      .addCase(fetchTicketsByUserId.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload as string;
      })
      // Handler untuk fetchTicketsByPaymentId
      .addCase(fetchTicketsByPaymentId.pending, (state) => {
        state.loading = true;
        state.message = "";
      })
      .addCase(fetchTicketsByPaymentId.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.loading = false;
        state.message = "Berhasil Mengambil Data Tiket Berdasarkan Id Payment";
      })
      .addCase(fetchTicketsByPaymentId.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload as string;
      });
  },
});

export const { setMessage } = ticketSlice.actions;
export default ticketSlice.reducer;
