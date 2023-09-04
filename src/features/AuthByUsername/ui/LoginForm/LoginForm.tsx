/* eslint-disable max-len */
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DyncamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DyncamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DyncamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error
                    && (
                        <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин или пароль')} />

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
                />

                <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                    {t('Войти')}
                </Button>
            </div>
        </DyncamicModuleLoader>
    );
});
export default LoginForm;
