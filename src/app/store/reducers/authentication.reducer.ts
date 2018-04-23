import { AuthenticationActionTypes, AuthenticationActions } from '../actions/authentication.actions';
import { User } from '@firebase/auth-types';

export interface AuthenticationState {
    user: User;
    error: any;
    loading: boolean;
    loaded: boolean;
    creating: boolean;
    loggingIn: boolean;
    loggingOut: boolean;
}

const initialState: AuthenticationState = {
    user: null,
    error: null,
    loading: false,
    loaded: false,
    creating: false,
    loggingIn: false,
    loggingOut: false
}

export function reducer(state: AuthenticationState = initialState, action: AuthenticationActions): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.GET_USER:
            return { ...state, loading: true };
        case AuthenticationActionTypes.GET_USER_SUCCESS:
            return { ...state, loading: false, loaded: true, user: action.payload };
        case AuthenticationActionTypes.GET_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        case AuthenticationActionTypes.SIGN_UP:
            return { ...state, creating: true };
        case AuthenticationActionTypes.SIGN_UP_SUCCESS:
            return { ...state, creating: false, error: null };
        case AuthenticationActionTypes.SIGN_UP_FAIL:
            return { ...state, creating: false, error: action.payload };
        case AuthenticationActionTypes.SIGN_IN:
            return {...state, loggingIn: true };
        case AuthenticationActionTypes.SIGN_IN_SUCCESS:
        case AuthenticationActionTypes.SIGN_IN_FAIL:
            return {...state, loggingIn: false };
        case AuthenticationActionTypes.SIGN_OUT:
            return {...state, loggingOut: true };
        case AuthenticationActionTypes.SIGN_OUT_SUCCESS:
        case AuthenticationActionTypes.SIGN_OUT_FAIL:
            return {...state, loggingOut: false };
        default:
            return state;
    }
}