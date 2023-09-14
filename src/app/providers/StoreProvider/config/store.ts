import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { rtkApi } from 'shared/api/rtkApi';
import { profileReducer } from 'entities/Profile';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        profile: profileReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        ...asyncReducers,
    };
    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),

    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
