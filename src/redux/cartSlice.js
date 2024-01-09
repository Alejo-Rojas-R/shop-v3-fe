import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        total: 0,
    },
    reducers: {
        setCart: (state, action) => {
            const cartItems = JSON.parse(localStorage.getItem('cart'));

            if (cartItems !== null) {
                state.items = cartItems;
                state.count = (cartItems === undefined) ? 0 : cartItems.length;
                let total = 0;
                cartItems.forEach(item => {
                    total += parseFloat(item.price);
                });

                const formatUSD = Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                });

                state.total = formatUSD.format(total);
            } else {
                state.items = 0;
                state.count = 0;
                state.total = 0;
            }
        },

    }
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
