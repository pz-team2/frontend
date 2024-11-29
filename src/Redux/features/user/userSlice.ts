
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getUserApi } from "./userApi";
// import { UserState } from "../../types/user.types";
// import { RootState } from "../../store";

// const initialState: UserState = {
//     user: null,
//     isUser: false,
//     error: null,
//     message: '',
//     loading: false
// };



// export const EventState = (state: RootState) => state.event;

// export const getUser = createAsyncThunk(
//     'user/getdata',
//     async (_, { rejectWithValue }) => {
//         try {
//             const respon = await getUserApi()
//             if (respon) {
//                 return respon.data
//             } else {
//                 return rejectWithValue(respon.message)
//             }
//         } catch (error) {
//             return rejectWithValue('terjadi kesalahan saat mengambil data user')
//         }
//     }
// );

// const eventSlice = createSlice({
//     name: 'event',
//     initialState,
//     reducers: {
//         // setMessage: (state, action: PayloadAction<string>) => {
//         //     state.message = action.payload;
//         // }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getUser.fulfilled, (state, action) => {
//                 state.events.push(action.payload);
//                 state.message = "Berhasil Menambahkan Event";
//                 state.isEvent = true;
//                 state.loading = false;
//             })

//     }
// });

































// // import { createAsyncThunk } from "@reduxjs/toolkit";
// // import { getUserApi } from "./userApi";
// // import { userType } from "../../types/user.types";
// // import { RootState } from "../../store";

// // const initialState: userType = {
// //     data: [],
// //     isEvent: false,
// //     message: '',
// //     loading: false,
// //     pagination: {
// //         total: 0,
// //         page: 1,
// //         lastPage: 1,
// //         hasNextPage: false,
// //         hasPrevPage: false,
// //     },
// // };



// // export const EventState = (state: RootState) => state.event;

// // export const getUser = createAsyncThunk(
// //     'user/getdata',
// //     async (_, { rejectWithValue }) => {
// //         try {
// //             const respon = await getUserApi()
// //             if (respon) {
// //                 return respon.data
// //             } else {
// //                 return rejectWithValue(respon.message)
// //             }
// //         } catch (error) {
// //             return rejectWithValue('terjadi kesalahan saat mengambil data user')
// //         }
// //     }
// // );

// // const eventSlice = createSlice({
// //     name: 'event',
// //     initialState,
// //     reducers: {
// //         // setMessage: (state, action: PayloadAction<string>) => {
// //         //     state.message = action.payload;
// //         // }
// //     },
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(getUser.fulfilled, (state, action) => {
// //                 state.events.push(action.payload);
// //                 state.message = "Berhasil Menambahkan Event";
// //                 state.isEvent = true;
// //                 state.loading = false;
// //             })

// //     }
// // });