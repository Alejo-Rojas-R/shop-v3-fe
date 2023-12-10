import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        title: '',
        body: '',
        show: false,
    },
    reducers: {
        setDialog: (state, action) => {
            const { title, body } = action.payload;
            state.title = title;
            state.body = body;
        },
        toggleShow: (state) => {
            state.show = !state.show;
        },
    }

});

export const { setDialog, toggleShow } = dialogSlice.actions;
export default dialogSlice.reducer;
