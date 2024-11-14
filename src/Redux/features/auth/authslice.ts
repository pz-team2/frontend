import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin, apiRegister, verifyEmail } from "./authApi";
import { authState } from "../type";

const initialState: authState = {
    email: '',
    password: '',
    message: '',
    username: '',
    isRegistered: false,
    isLogged: false,
    isverified: false,
    verifyMessage: ''
}

export const login = createAsyncThunk( 'auth/login',
    async (data: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await apiLogin(data);
            if (response.success) {
                localStorage.setItem('token', response.data.token);
                console.log(data)
                return response.data;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue('Terjadi Kesalahan, Silahkan Coba Kembali');
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (data: { email: string; password: string; username: string }, { rejectWithValue }) => {
        try {
            const response = await apiRegister(data);
            if (response.success) {
                return response.message;
            } else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            return rejectWithValue('Terjadi Kesalahan, Silahkan Coba Kembali');
        }
    }
);



export const verify = createAsyncThunk( 'auth/verify',
    async (token: string, { rejectWithValue }) => {
        try {
            const response = await verifyEmail(token);
            return response.message;
        } catch (error) {
            return rejectWithValue('Terjadi Kesalahan, Silahkan Coba Kembali');
        }
    }
);

// Authentication 
const authSlice = createSlice({
    name: 'auth',
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
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state) => {
                state.isLogged = true;
                state.message = 'Login Berhasil';
            })
            .addCase(login.rejected, (state, action) => {
                state.message = action.payload as string;
            })
            .addCase(register.fulfilled, (state) => {
                state.isRegistered = true;
                state.message = 'Register Berhasil';
            })
            .addCase(register.rejected, (state, action) => {
                state.message = action.payload as string;
            })
            .addCase(verify.fulfilled, (state, action) => {
                state.isverified = true;
                state.verifyMessage = action.payload;
            })
            .addCase(verify.rejected, (state, action) => {
                state.isverified = false;
                state.verifyMessage = action.payload as string;
            });
    }
});

export const { setEmail, setMessage, setPassword, setUsername } = authSlice.actions;
export default authSlice.reducer;
