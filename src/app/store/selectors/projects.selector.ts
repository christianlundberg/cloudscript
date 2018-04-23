import { ProjectsState } from '../reducers/projects.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getProjectsState = createFeatureSelector<ProjectsState>('projects');

export const isLoadingProjects = createSelector(
    getProjectsState,
    state => state.loading
);

export const getAllProjects = createSelector(
    getProjectsState,
    state => state.projects
);