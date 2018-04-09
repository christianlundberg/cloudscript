import { Action } from '@ngrx/store';
import { Project } from '../../models/project';

export enum ProjectActionTypes {
    GET_PROJECT = '[Project] Get Project',
    GET_PROJECT_SUCCESS = '[Project] Get Project Success',
    GET_PROJECT_FAIL = '[Project] Get Project Fail',
}

export class GetProject{
    readonly type = ProjectActionTypes.GET_PROJECT;

    constructor(public payload: string){}
}

export class GetProjectSuccess{
    readonly type = ProjectActionTypes.GET_PROJECT_SUCCESS;

    constructor(public payload: Project){}
}

export class GetProjectFail{
    readonly type = ProjectActionTypes.GET_PROJECT_FAIL;

    constructor(public payload: any){}
}

export type ProjectActions = GetProject | GetProjectSuccess | GetProjectFail