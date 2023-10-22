import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./LoginForm')), 500);
        })
);
