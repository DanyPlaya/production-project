import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode,
    state?: DeepPartial<StateSchema>
}

export const StoreDecorator: FC<Props> = ({ state, children }) => (
    <StoreProvider initialState={state}>
        {children}
    </StoreProvider>

);
