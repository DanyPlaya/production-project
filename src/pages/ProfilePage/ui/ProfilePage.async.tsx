import { FC, lazy } from 'react';

export const ProfilePageAsync = lazy<FC>(
    () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        })
);
