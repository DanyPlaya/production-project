import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';
import axios from 'axios';

import { User, userActions } from 'entities/User';

interface loginByUsernameProps {
    username: string;
    password: string;
}
enum LoginErrors {
    INCORECT_DATA = '',
    SERVER_ERROR = '',
}
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                authData,
            );
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
