import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginPassword = createSelector(
    getLoginState,
    (login: LoginSchema) => login.password,

);
