import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props:AppLinkProps) => {
    const {
        to, className, children, theme = 'primary', ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                {},
                [className, cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
