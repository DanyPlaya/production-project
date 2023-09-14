import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { User, userActions } from 'entities/User';
import { rtkApi } from 'shared/api/rtkApi';
import { loginActions } from '../../slice/loginSlice';

interface loginByUsernameProps {
    username: string;
    password: string;
}
// enum LoginErrors {
//     INCORECT_DATA = '',
//     SERVER_ERROR = '',
// }
// export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
//     'login/loginByUsername',
//     async (authData, thunkAPI) => {
//         try {
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
            // async onQueryStarted(body, { dispatch, queryFulfilled }) {
            //     queryFulfilled.then((result) => {
            //         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(result));
            //     }).catch((err) => console.log(err));
            // },

        }),
    }),
});

export const { useQueryLoginMutation } = loginApi;
