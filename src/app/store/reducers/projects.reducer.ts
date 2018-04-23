import { ProjectActionTypes, ProjectActions } from '../actions/project.actions';
import { Project } from '../../models/project';

export interface ProjectsState {
    projects: Project[];
    loading: boolean;
}

const initialState: ProjectsState = {
    projects: [],
    loading: false
};

export function reducer(state: ProjectsState = initialState, action: ProjectActions) : ProjectsState {
    switch (action.type) {
        case ProjectActionTypes.GET_ALL_PROJECTS:
            return { ...state, loading: true };
        case ProjectActionTypes.GET_ALL_PROJECTS_SUCCESS:
            return { projects: action.payload, loading: false };
        case ProjectActionTypes.GET_ALL_PROJECTS_FAIL:
            return { ...state, loading: false };
        default:
            return state;
    }
}