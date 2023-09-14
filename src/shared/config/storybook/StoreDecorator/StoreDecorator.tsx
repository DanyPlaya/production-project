import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode,
    state?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
}
const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};
export const StoreDecorator: FC<Props> = ({
    state,
    children,
    asyncReducer,
}) => (
    <StoreProvider asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }} initialState={state}>
        {children}
    </StoreProvider>

);
