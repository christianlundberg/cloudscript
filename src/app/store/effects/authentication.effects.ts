import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../../services/auth.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as authenticationActions from '../actions/authentication.actions';
import { 
    AuthenticationActionTypes, 
    SignIn,
    SignInSuccess,
    SignInFail,
    SignUp, 
    SignUpSuccess, 
    SignUpFail, 
    SignOut, 
    SignOutSuccess, 
    SignOutFail } from '../actions/authentication.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthenticationEffects{

    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private router: Router,
        private snackbar: MatSnackBar){}

    @Effect()
    signIn$: Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActionTypes.SIGN_IN),
        switchMap((action: SignIn) => {
            return Observable.fromPromise(this.authService.signIn(action.payload)).pipe(
                map(() => {
                    this.router.navigate(['/projects']);
                    return new SignInSuccess();
                }),
                catchError(error => {
                    this.snackbar.open(error.message, null, { duration: 2000});
                    return of(new SignInFail(error));
                })
            );
        })
    );
    
    @Effect()
    signOut$: Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActionTypes.SIGN_OUT),
        switchMap((action: SignOut) => {
            return Observable.fromPromise(this.authService.signOut()).pipe(
                map(() => {
                    this.router.navigate(['/']);
                    return new SignOutSuccess();
                }),
                catchError(error => of(new SignOutFail(error)))
            );
        })
    );

    @Effect()
    signUp$: Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActionTypes.SIGN_UP),
        mergeMap((action: SignUp) => {
            return Observable.fromPromise(this.authService.signUp(action.payload)).pipe(
                map(() => {
                    this.router.navigate(['/projects']);
                    return new SignUpSuccess()
                }),
                catchError(error => {
                    this.snackbar.open(error.message, null, { duration: 2000});
                    return of(new SignUpFail(error));
                })
            );
        })
    );
}