import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SignUp } from '../../store/actions/authentication.actions';

@Component({
    selector: '[sign-up-view]',
    templateUrl: './sign-up-view.component.html',
    host: {'class': 'view-container'}
})
export class SignUpViewComponent{

    form: FormGroup;

    constructor(private store: Store<AppState>, fb: FormBuilder){
        this.form = fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(){
        this.store.dispatch(new SignUp(this.form.value));
    }
}