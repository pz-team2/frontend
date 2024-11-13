import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authslice';
import categoryReducer from './features/category/categorySlice'
import organizerReducer  from './features/organizer/organizerSlice'
import loginOrganizerReducer  from './features/organizer/loginOrganizerSlice'
import dashboardReducer  from './features/dashboard/dashboardSlice'
 

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        organizer: organizerReducer,
        loginOrganizer: loginOrganizerReducer,
        dashboard: dashboardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;