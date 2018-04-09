import { ProjectState } from '../reducers/project.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const getProjectState = createFeatureSelector<ProjectState>('project');

export const isLoadingProject = createSelector(
    getProjectState,
    state => state.loading
);

export const getProject = createSelector(
    getProjectState,
    state => state.project
);