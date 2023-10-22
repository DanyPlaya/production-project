import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DyncamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DyncamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const initialReducers: ReducerList = {
    profile: profileReducer,
};
const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <DyncamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DyncamicModuleLoader>
    );
};

export default ProfilePage;
