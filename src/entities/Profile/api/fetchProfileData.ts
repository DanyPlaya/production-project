import { rtkApi } from 'shared/api';
import { Profile } from '../types/profile';
// .enhanceEndpoints({ addTagTypes: ['profile'] })
export const profileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchProfile: build.query<Profile, void>({
            query: () => ({
                url: '/profile',
                method: 'GET',
            }),
            // providesTags: ['profile']
        }),
    }),
});
export const { useFetchProfileQuery } = profileApi;
