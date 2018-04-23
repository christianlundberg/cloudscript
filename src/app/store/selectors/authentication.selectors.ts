import { AuthenticationState } from '../reducers/authentication.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const getAuthenticationState = createFeatureSelector<AuthenticationState>('authentication');


export const getUser = createSelector(
    getAuthenticationState,
    state => state.user
);

export const isAuthenticated = createSelector(
    getUser,
    state => !!state
);

export const isNotAuthenticated = createSelector(
    isAuthenticated,
    state => !state
);

export const isLoaded = createSelector(
    getAuthenticationState,
    state => state.loaded
);

export const isLoading = createSelector(
    getAuthenticationState,
    state => state.loading  
);

export const isLoggingIn = createSelector(
    getAuthenticationState,
    state => state.loading  
);

export const isLoggingOut = createSelector(
    getAuthenticationState,
    state => state.loading  
);

export const isCreatingAccount = createSelector(
    getAuthenticationState,
    state => state.creating
);