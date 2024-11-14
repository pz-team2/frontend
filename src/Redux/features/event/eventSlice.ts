import { createAsyncThunk } from "@reduxjs/toolkit";
import { tambahEventApi } from "./eventApi";
import { eventType } from "../type";

// Mendefinisikan thunk untuk menambah event
export const tambahEvent = createAsyncThunk(
    'event/tambah',
    async (
        { organizerId, data }: { organizerId: string; data: eventType },
        { rejectWithValue }
    ) => {
        try {
            const response = await tambahEventApi(organizerId, data);

            if (response.success) {
                return response.data;
            } else {
                return rejectWithValue(response.message || 'Gagal menambah event');
            }
        } catch (error) {
            return rejectWithValue('Terjadi kesalahan saat menambah event');
        }
    }
);
