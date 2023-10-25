import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DyncamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DyncamicModuleLoader';
import {
    ProfileCard,
    profileReducer,
    useFetchProfileQuery,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileApi } from 'entities/Profile/api/fetchProfileData';
import { fetchProfileDataThunk } from 'entities/Profile/api/fetchProfileDataThunk';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const initialReducers: ReducerList = {
    profile: profileReducer,
};
const ProfilePage: React.FC<ProfilePageProps> = memo(({ className }) => {
    const { t } = useTranslation();
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(fetchProfileDataThunk());
    // });
    const { data, isLoading, refetch } = useFetchProfileQuery();
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <DyncamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfileCard />
            </div>
        </DyncamicModuleLoader>
    );
});

export default ProfilePage;
