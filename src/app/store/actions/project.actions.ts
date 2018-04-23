import { Action } from '@ngrx/store';
import { Project } from '../../models/project';

export enum ProjectActionTypes {
    GET_ALL_PROJECTS = '[Project] Get All Projects',
    GET_ALL_PROJECTS_SUCCESS = '[Project] Get All Projects Success',
    GET_ALL_PROJECTS_FAIL = '[Project] Get All Projects Fail',
    GET_PROJECT = '[Project] Get Project',
    GET_PROJECT_SUCCESS = '[Project] Get Project Success',
    GET_PROJECT_FAIL = '[Project] Get Project Fail',
    UPDATE_PROJECT = '[Project] Update Project'
}

export class GetAllProjects{
    readonly type = ProjectActionTypes.GET_ALL_PROJECTS;
}

export class GetAllProjectsSuccess{
    readonly type = ProjectActionTypes.GET_ALL_PROJECTS_SUCCESS;

    constructor(public payload: Project[]){}
}

export class GetAllProjectsFail{
    readonly type = ProjectActionTypes.GET_ALL_PROJECTS_FAIL;

    constructor(public payload: any){}
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

export type ProjectActions = GetAllProjects | GetAllProjectsSuccess | GetAllProjectsFail | GetProject | GetProjectSuccess | GetProjectFail | UpdateProject;