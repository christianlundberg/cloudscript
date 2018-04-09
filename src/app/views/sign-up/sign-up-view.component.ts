import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
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
            email: [''],
            password: ['']
        });
    }

    onSubmit(){
        this.store.dispatch(new SignUp(this.form.value));
    }
}