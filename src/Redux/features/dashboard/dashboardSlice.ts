import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataDashbord, staticApi } from "./dashboardApi";
import { datastatic } from "../../types/dashboard.types";

const initialState: datastatic = {
    isSucces: false,
    message: '',
    loading: '',
    stats: {
        totalUsers: 0,
        totalEvents: 0,
        totalOrganizers: 0,
    },
    events: []
};

export const dataStatic = createAsyncThunk(
    'dashboard/static',
    async (_, { rejectWithValue }) => {  // Tidak ada argumen yang diterima
        try {
            const response = await staticApi();
            if (response.success) {
                return response.data;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue('Gagal Mengambil Data Kategori');
        }
    }
);

export const dataterbaru = createAsyncThunk('dashboard/terbaru',
    async (_, { rejectWithValue }) => {  // Tidak ada argumen yang diterima
        try {
            const response = await dataDashbord();
            if (response.success) {
                return response.data;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue('Gagal Mengambil Data Kategori');
        }
    }
)


const dashbardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setloading: (state, action: PayloadAction<string>) => {
            state.loading = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(dataStatic.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(dataStatic.fulfilled, (state, action) => {
                state.isSucces = true;
                state.loading = "";  // Reset loading
                state.message = 'Berhasil mendapatkan statistik dashboard';
                state.stats = action.payload; // Simpan data
            })
            .addCase(dataStatic.rejected, (state, action) => {
                state.isSucces = false;
                state.loading = "";
                state.message = action.payload as string || "Gagal mengambil data";
            })
            .addCase(dataterbaru.fulfilled, (state, action) => {
                state.isSucces = true;
                state.loading = "";  // Reset loading
                state.message = 'Berhasil mendapatkan statistik dashboard';
                state.events = action.payload; // Simpan data
            })
            .addCase(dataterbaru.rejected, (state, action) => {
                state.isSucces = false;
                state.loading = "";
                state.message = action.payload as string || "Gagal mengambil data";
            });
    }
})

export const { setloading, setMessage } = dashbardSlice.actions;
export default dashbardSlice.reducer;