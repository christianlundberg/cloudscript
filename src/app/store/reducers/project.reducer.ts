import { Project } from '../../models/project';
import { ProjectActionTypes, ProjectActions } from '../actions/project.actions';

export interface ProjectState {
    project: Project;
    loading: boolean;
}

const initialState: ProjectState = {
    project: null,
    loading: false
}

export function projectReducer(state: ProjectState = initialState, action: ProjectActions): ProjectState {
    switch (action.type) {
        case ProjectActionTypes.GET_PROJECT:
            return { ...state, loading: true };
        case ProjectActionTypes.GET_PROJECT_SUCCESS:
            return { project: action.payload, loading: false };
        case ProjectActionTypes.GET_PROJECT_FAIL:
            return { ...state, loading: false };
        default:
            return state;
    }
}