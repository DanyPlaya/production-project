import { Route, RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
// My router without enum
// export type AppRoutesType = 'main' | 'about' | 'profile' | 'not_found'
// export const RoutePat:Record<AppRoutesType, string> = {
//     main: '/',
//     about: '/about',
//     profile: '/profile',
//     not_found: '*',
// };
// export const RouteConfigNew: Record<AppRoutesType, RouteProps> = {
//     main: {
//         path: RoutePat.main,
//         element: <MainPage />,
//     },
//     about: {
//         path: RoutePat.about,
//         element: <AboutPage />,
//     },
//     profile: {
//         path: RoutePat.profile,
//         element: <ProfilePage />,
//     },
//     not_found: {
//         path: RoutePat.not_found,
//         element: <NotFoundPage />,
//     },

// };

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
