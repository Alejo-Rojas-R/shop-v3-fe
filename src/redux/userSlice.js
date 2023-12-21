import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        email: '',
    },
    reducers: {
        setCurrentUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
