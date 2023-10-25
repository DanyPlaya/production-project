import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import React, { memo } from 'react';
import { SidebarItemType } from '../../model/sidebarItem';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(
    ({ className, item, collapsed }: SidebarItemProps) => {
        const { t } = useTranslation();
        const mods: Mods = {
            [cls.collapsed]: collapsed,
        };
        return (
            <AppLink
                theme='secondary'
                to={item.path}
                className={classNames(cls.item, mods)}
            >
                <item.icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    }
);
