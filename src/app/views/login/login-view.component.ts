import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html'
})
export class LoginViewComponent {

    form: FormGroup;

    constructor(private store: Store<AppState>, fb: FormBuilder) {
        this.form = fb.group({
            email: [''],
            password: ['']
        });
    }

    onSubmit(){
        
    }
}