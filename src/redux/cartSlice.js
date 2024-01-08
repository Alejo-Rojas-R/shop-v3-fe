import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0
    },
    reducers: {
        setCart: (state, action) => {
            const countCartItems = JSON.parse(localStorage.getItem('cart'))?.length;
            state.count = (countCartItems === undefined) ? 0 : countCartItems;
        },

    }
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
