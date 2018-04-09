import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getId = createSelector(
    getRouterState,
    state => state ? state.state.params.id : null
);

export const isLandingPage = createSelector(
    getRouterState,
    state => state ? state.state.url === '/' : false
);