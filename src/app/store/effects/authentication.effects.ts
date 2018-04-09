import { of } from 'rxjs/observable/of';
import { AuthService } from '../../services/auth.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as authenticationActions from '../actions/authentication.actions';
import { AuthenticationActionTypes, SignUp, SignUpSuccess, SignUpFail } from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects{

    constructor(private actions$: Actions, private authService: AuthService){}

    // @Effect()
    // getUser$: Observable<Action> = this.actions$.pipe(
    //     ofType(authenticationActions.AuthenticationActionTypes.GET_USER),
    //     switchMap((action: authenticationActions.GetUser) => this.authService.authState),
    //     map(user => new authenticationActions.GetUserSuccess(user)),
    //     catchError(error => of(new authenticationActions.GetUserFail(error)))
    // );

    @Effect()
    signUp$: Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActionTypes.SIGN_UP),
        mergeMap((action: SignUp) => {
            return Observable.fromPromise(this.authService.signUp(action.payload)).pipe(
                map(() => new SignUpSuccess()),
                catchError(error => of(new SignUpFail(error)))
            );
        })
    );
}