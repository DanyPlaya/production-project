/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { rtkApi } from 'shared/api/rtkApi';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface loginByUsernameProps {
    username: string;
    password: string;
}
// // enum LoginErrors {
// //     INCORECT_DATA = '',
// //     SERVER_ERROR = '',
// // }
// // eslint-disable-next-line max-len
// export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string, extra: ThunkExtraArg }>(
//     'login/loginByUsername',
//     async (authData, { dispatch, extra }) => {
//         try {
//             extra.navigate;
//             const response = await axios.post<User>(
//                 'http://localhost:8000/login',
//                 authData,
//             );

//             if (!response.data) {
//                 throw new Error();
//             }
//             localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(response.data));
//             thunkAPI.dispatch(userActions.setAuthData(response.data));
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             return thunkAPI.rejectWithValue('error');
//         }
//     },
// );
export const loginApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        queryLogin: build.mutation<User, loginByUsernameProps>({
            query: (args) => ({
                url: '/login',
                method: 'POST',
                body: args,

            }),

            // Task как правильно обработать ошибку
            async onQueryStarted(body, { dispatch, queryFulfilled, extra }) {
                queryFulfilled.then((data) => {
                    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data.data));
                    dispatch(userActions.setAuthData(data.data));
                }).catch((err) => console.log(err));
            },

        }),
    }),
});

export const { useQueryLoginMutation } = loginApi;
