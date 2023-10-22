/* eslint-disable max-len */

import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { useQueryLoginMutation } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DyncamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DyncamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { userActions } from 'entities/User';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    // const error = useSelector(getLoginError);
    // const isLoading = useSelector(getLoginIsLoading);
    const [login, { isError, isLoading, status }] = useQueryLoginMutation();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(async () => {
        // dispatch(loginByUsername({ username, password }));

        await login({
            password,
            username,
        })
            .unwrap()
            .then(() => {
                navigate('/profile');
                onSuccess();
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login, navigate, onSuccess, password, username]);

    return (
        <DyncamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {isError && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t('Вы ввели неверный логин или пароль')}
                    />
                )}
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
                    type='password'
                />

                <Button
                    disabled={isLoading}
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DyncamicModuleLoader>
    );
});
export default LoginForm;
