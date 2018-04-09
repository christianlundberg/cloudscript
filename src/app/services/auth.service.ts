import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthService {

    public authState: Observable<User>;

    constructor(private afAuth: AngularFireAuth){
        this.authState = afAuth.authState;
    }

    signUp({ email, password }) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}