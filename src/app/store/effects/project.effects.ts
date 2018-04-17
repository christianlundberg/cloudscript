import { getProject } from '../selectors/project.selectors';
import { getId } from '../selectors/router.selectors';
import { AppState } from '../reducers/index';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { ProjectService } from '../../services/project.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProjectActionTypes, GetProjectSuccess, UpdateProject } from '../actions/project.actions';

@Injectable()
export class ProjectEffects{

    constructor(private actions$: Actions, private state$: Store<AppState>, private projectService: ProjectService){}

    @Effect()
    get$: Observable<Action> = this.actions$.pipe(
        ofType(ProjectActionTypes.GET_PROJECT),
        withLatestFrom(this.state$.select(getId)),
        switchMap(([action, state]) => {
            return this.projectService.get(state).snapshotChanges().pipe(
                map(doc => new GetProjectSuccess({
                    id: doc.payload.id,
                    ...doc.payload.data()
                }))
            );
        })
    );

    @Effect({ dispatch: false })
    update$ = this.actions$.pipe(
        ofType(ProjectActionTypes.UPDATE_PROJECT),
        map((action: UpdateProject) => action.payload),
        withLatestFrom(this.state$.select(getProject)),
        tap(([state, prevState]) => this.projectService.update({...prevState, ...state}))
    );
}