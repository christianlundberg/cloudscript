import { Action } from '@ngrx/store';
import { User } from '@firebase/auth-types';

export enum AuthenticationActionTypes {
    GET_USER = '[Authentication] Get User',
    GET_USER_SUCCESS = '[Authentication] Get User Success',
    GET_USER_FAIL = '[Authentication] Get User Fail',
    SIGN_UP = '[Authentication] Sign Up',
    SIGN_UP_SUCCESS = '[Authentication] Sign Up Success',
    SIGN_UP_FAIL = '[Authentication] Sign Up Fail',
    SIGN_IN = '[Authentication] Sign In',
    SIGN_IN_SUCCESS = '[Authentication] Sign In Success',
    SIGN_IN_FAIL = '[Authentication] Sign In Fail',
    SIGN_OUT = '[Authentication] Sign Out',
    SIGN_OUT_SUCCESS = '[Authentication] Sign Out Success',
    SIGN_OUT_FAIL = '[Authentication] Sign Out Fail'
};

export class GetUser implements Action{
    readonly type = AuthenticationActionTypes.GET_USER;
}

export class GetUserSuccess implements Action{
    readonly type = AuthenticationActionTypes.GET_USER_SUCCESS;

    constructor(public payload: User){}
}

export class GetUserFail implements Action{
    readonly type = AuthenticationActionTypes.GET_USER_FAIL;

    constructor(public payload: any){}
}

export class SignUp implements Action{
    readonly type = AuthenticationActionTypes.SIGN_UP;

    constructor(public payload: {email: string, password: string}){}
}

export class SignUpSuccess implements Action{
    readonly type = AuthenticationActionTypes.SIGN_UP_SUCCESS;

    constructor(){}
}

export class SignUpFail implements Action{
    readonly type = AuthenticationActionTypes.SIGN_UP_FAIL;

    constructor(public payload: any){}
}

export class SignIn implements Action{
    readonly type = AuthenticationActionTypes.SIGN_IN;

    constructor(public payload: {email: string, password: string}){}
}

export class SignInSuccess implements Action{
    readonly type = AuthenticationActionTypes.SIGN_IN_SUCCESS;
}

export class SignInFail implements Action{
    readonly type = AuthenticationActionTypes.SIGN_IN_FAIL;

    constructor(public payload: any){}
}

export class SignOut implements Action{
    readonly type = AuthenticationActionTypes.SIGN_OUT;
}

export class SignOutSuccess implements Action{
    readonly type = AuthenticationActionTypes.SIGN_OUT_SUCCESS;
}

export class SignOutFail implements Action{
    readonly type = AuthenticationActionTypes.SIGN_OUT_FAIL;

    constructor(public payload: any){}
}

export type AuthenticationActions = 
    GetUser | 
    GetUserSuccess | 
    GetUserFail | 
    SignUp | 
    SignUpSuccess | 
    SignUpFail | 
    SignOut | 
    SignOutSuccess | 
    SignOutFail | 
    SignIn | 
    SignInSuccess | 
    SignInFail;