import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);
describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    // const userValue = { username: '123', id: '1' };
    // beforeEach(() => {
    //    dispatch = jest.fn();
    //    getState = jest.fn();
    // });
    // test('success login', async () => {
    //    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //    const action = loginByUsername({ username: '123', password: '123' });
    //    const result = await action(dispatch, getState, undefined);
    //    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //    expect(dispatch).toHaveBeenCalledTimes(3);
    //    expect(mockedAxios.post).toHaveBeenCalled();
    //    expect(result.meta.requestStatus).toBe('fulfilled');
    //    expect(result.payload).toEqual(userValue);
    // });
    // test('error login', async () => {
    //    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //    const action = loginByUsername({ username: '123', password: '123' });
    //    const result = await action(dispatch, getState, undefined);
    //    expect(dispatch).toHaveBeenCalledTimes(2);
    //    expect(mockedAxios.post).toHaveBeenCalled();
    //    expect(result.meta.requestStatus).toBe('rejected');
    //    expect(result.payload).toBe('error');
    // });

    const userValue = { username: '123', id: '1' };
    test('success login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk(undefined);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
