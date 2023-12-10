import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import dialogReducer from './dialogSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        dialog: dialogReducer,
    },
});

export default store