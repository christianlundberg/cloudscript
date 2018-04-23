import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import * as authenticationActions from '../../store/actions/authentication.actions';

@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html'
})
export class LoginViewComponent {

    form: FormGroup;

    constructor(private store: Store<AppState>, fb: FormBuilder) {
        this.form = fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(){
        this.store.dispatch(new authenticationActions.SignIn(this.form.value));
    }
}