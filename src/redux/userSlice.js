import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        email: '',
        token: '',
    },
    reducers: {
        setCurrentUser: (state, action) => {
            const { name, username, email, token } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
            state.token = token;
        },
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
