/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginState/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginState/getLoginPassword';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername());
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                onChange={onChangeUsername}
                placeholder={t('Введите логин')}
                className={cls.input}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                autoFocus
                placeholder={t('Введите пароль')}
                className={cls.input}
                value={password}
            />

            <Button onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
});
