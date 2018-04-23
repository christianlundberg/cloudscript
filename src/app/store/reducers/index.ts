import { ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
    routerReducer,
    RouterReducerState,
    RouterStateSerializer
} from '@ngrx/router-store';
import * as fromProject from './project.reducer';
import * as fromAuthentication from './authentication.reducer';
import * as fromProjects from './projects.reducer';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    project: fromProject.ProjectState;
    projects: fromProjects.ProjectsState;
    authentication: fromAuthentication.AuthenticationState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    project: fromProject.projectReducer,
    projects: fromProjects.reducer,
    authentication: fromAuthentication.reducer
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const { url, root: { queryParams } } = routerState;
        const { params } = route;

        return { url, params, queryParams };
    }
}