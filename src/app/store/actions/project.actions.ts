import { Action } from '@ngrx/store';
import { Project } from '../../models/project';

export enum ProjectActionTypes {
    GET_PROJECT = '[Project] Get Project',
    GET_PROJECT_SUCCESS = '[Project] Get Project Success',
    GET_PROJECT_FAIL = '[Project] Get Project Fail',
    UPDATE_PROJECT = '[Project] Update Project'
}

export class GetProject{
    readonly type = ProjectActionTypes.GET_PROJECT;
}

export class GetProjectSuccess{
    readonly type = ProjectActionTypes.GET_PROJECT_SUCCESS;

    constructor(public payload: Project){}
}

export class GetProjectFail{
    readonly type = ProjectActionTypes.GET_PROJECT_FAIL;

    constructor(public payload: any){}
}

export class UpdateProject{
    readonly type = ProjectActionTypes.UPDATE_PROJECT;

    constructor(public payload: Project){}
}

export type ProjectActions = GetProject | GetProjectSuccess | GetProjectFail | UpdateProject;