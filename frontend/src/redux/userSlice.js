import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        email: '',
    },
    reducers: {
        setUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },

    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
