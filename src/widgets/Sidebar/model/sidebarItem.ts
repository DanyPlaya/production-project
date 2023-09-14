import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';

export type SidebarItemType ={
    path:string,
    text:string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,

}
export const SidebarItemsList:SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: HomeIcon,
        text: 'Главная',

    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'О нас',

    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Профиль',

    },
];
