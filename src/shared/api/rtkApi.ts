import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const rtkApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, { getState }) => {
            const user = (getState() as StateSchema).user.authData;
            headers.set('Authorization', localStorage.getItem(USER_LOCALSTORAGE_KEY));
        },

    }),
    endpoints: () => ({}),
});
