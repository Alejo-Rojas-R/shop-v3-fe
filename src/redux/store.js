import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import dialogReducer from './dialogSlice'
import searchReducer from './searchSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        dialog: dialogReducer,
        search: searchReducer,
    },
});

export default store