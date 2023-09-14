import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';

// import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, actions: PayloadAction<string>) => {
            state.username = actions.payload;
        },
        setPassword: (state, actions: PayloadAction<string>) => {
            state.password = actions.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },

});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
