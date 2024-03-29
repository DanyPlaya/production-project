import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { rtkApi } from 'shared/api/rtkApi';
import { profileReducer } from 'entities/Profile';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/axiosApi';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,

        [rtkApi.reducerPath]: rtkApi.reducer,
        ...asyncReducers,
    };
    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: extraArg
                },

            }
        ).concat(rtkApi.middleware),

    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
