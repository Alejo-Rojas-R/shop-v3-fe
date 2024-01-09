import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
    },
    reducers: {
        setSearch: (state, action) => {
            const { query } = action.payload;
            state.query = query;
        },
    }

});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
