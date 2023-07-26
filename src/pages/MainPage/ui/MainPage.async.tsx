import { FC, lazy } from 'react';

export const MainPageAsync = lazy<FC>(
    () => new Promise((resolve) => {
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
