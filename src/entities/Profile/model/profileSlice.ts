import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { profileApi } from '../api/fetchProfileData';
import { fetchProfileDataThunk } from '../api/fetchProfileDataThunk';

const initialState: ProfileSchema = {
    error: undefined,
    isLoading: false,
    readonly: true,
    data: undefined,

};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addMatcher(profileApi.endpoints.fetchProfile.matchFulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload;
                console.log('addmathcer', action.payload);
                // state.isLoading = false;
                // state.error = undefined;
            })
            .addMatcher(profileApi.endpoints.fetchProfile.matchPending, (state) => {
                state.isLoading = true;
            });
        // .addMatcher(profileApi.endpoints.fetchProfile.matchRejected, (state, action) => {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
// extraReducers: (builder) => {
//     builder
//         .addCase(fetchProfileDataThunk.pending, (state) => {
//             state.error = undefined;
//             state.isLoading = true;
//         })
//         .addCase(fetchProfileDataThunk.fulfilled, (
//             state,
//             action: PayloadAction<Profile>,
//         ) => {
//             state.isLoading = false;
//             state.data = action.payload;
//         })
//         .addCase(fetchProfileDataThunk.rejected, (state, action) => {
//             state.isLoading = false;
//             state.error = action.payload;
//         });
// },
