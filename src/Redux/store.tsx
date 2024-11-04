import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authslice';
import categoryReducer from './features/category/categorySlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;