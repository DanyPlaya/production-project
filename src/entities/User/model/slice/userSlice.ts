import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { loginApi } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(loginApi.endpoints.queryLogin.matchFulfilled, (state, action: PayloadAction<User>) => {
                state.authData = action.payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
