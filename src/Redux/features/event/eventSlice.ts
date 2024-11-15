import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataEventApi, getEventByOrganizerApi, tambahEventApi } from "./eventApi"; // pastikan API ini benar
import { eventType, Events } from "../type";
import { RootState } from "../../store";

const initialState: eventType = {
    events: [],
    isEvent: false,
    message: '',
    loading: false,
    pagination: {
        total: 0,
        page: 1,
        lastPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
    },
}

// 1. Buat State 
export const EventState = (state: RootState) => state.event;

// 2. Mengambil data yang akan diambil 
export const EventErrorAndLoading = createSelector(
    [EventState], (eventState: eventType) => ({
        error: eventState.message,
        loading: eventState.loading
    })
);

// 3. Mengambil message secara langsung
export const EventMessage = createSelector(
    [EventState], (eventState: eventType) => eventState.message
);

// Mendefinisikan thunk untuk menambah event
export const tambahEvent = createAsyncThunk(
    'event/tambah',
    async (
        { id, data }: { id: string; data: Events },
        { rejectWithValue }
    ) => {
        try {
            const response = await tambahEventApi(id, data);
            if (response.success) {
                return response.data;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue('Terjadi kesalahan saat menambah event');
        }
    }
);

export const getDataEvent = createAsyncThunk(
    'event/getData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getDataEventApi()
            if (response.success) {
                return response.data
            } else {
                return rejectWithValue(response.message)
            }
        } catch (error) {
            return rejectWithValue('Terjadi kesalahan saat mengambil data')
        }
    }
)

export const getEventsByOrganizer = createAsyncThunk(
    "event/getByOrganizer",
    async (
        { organizerId, page }: { organizerId: string; page: number },
        { rejectWithValue }
    ) => {
        try {
            const response = await getEventByOrganizerApi(organizerId, page);
            if (response.success) {
                return response.data;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue("Terjadi kesalahan saat mengambil data event");
        }
    }
);


const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(tambahEvent.fulfilled, (state, action) => {
                state.events.push(action.payload);
                state.message = "Berhasil Menambahkan Event";
                state.isEvent = true;
            })
            .addCase(tambahEvent.rejected, (state, action) => {
                state.message = action.payload as string;
                state.message = "gagal menambahkan event";
            })
            .addCase(getDataEvent.fulfilled, (state, action) => {
                state.events = action.payload;
                state.message = "Berhasil Mengambil Data";
                state.isEvent = true;
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(getDataEvent.rejected, (state, action) => {
                state.message = action.payload as string;
                state.loading = false;
                state.isEvent = false;
            }
            )
            .addCase(getEventsByOrganizer.fulfilled, (state, action) => {
                state.events = action.payload.data;
                state.pagination = action.payload.pagination;
                state.message = "Berhasil Mengambil Data Event";
                state.isEvent = true;
                state.loading = false;
              })
              .addCase(getEventsByOrganizer.rejected, (state, action) => {
                state.message = action.payload as string;
                state.loading = false;
                state.isEvent = false;
              });

    }
});

export default eventSlice.reducer;
