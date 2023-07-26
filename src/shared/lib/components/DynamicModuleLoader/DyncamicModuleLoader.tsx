import { FC, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [nameReducer in StateSchemaKey]?: Reducer
}
type ReducerListEntry = [StateSchemaKey, Reducer]
interface DyncamicModuleLoaderProps {
    reducers: ReducerList;
    children: ReactNode;
    removeAfterUnmount?: boolean

}

export const DyncamicModuleLoader: FC<DyncamicModuleLoaderProps> = (props) => {
    const {
        reducers,
        children,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([nameReducer, reducer]: ReducerListEntry) => {
            store.reducerManager.add(nameReducer, reducer);
            dispatch({ type: `@INIT ${nameReducer} reducer` });
        });

        return () => {
            Object.entries(reducers).forEach(([nameReducer]: ReducerListEntry) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(nameReducer);
                    dispatch({ type: `@DESTROY ${nameReducer} reducer` });
                }
            });
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
