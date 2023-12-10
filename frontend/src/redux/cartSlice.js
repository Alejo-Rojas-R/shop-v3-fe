import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: []
    },
    reducers: {
        setCart: (state, action) => {
            const { items } = action.payload;
            state.items = items
        },

    }
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
