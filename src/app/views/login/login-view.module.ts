import { RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        RouterModule,
        CommonModule, 
        MatInputModule, 
        MatIconModule, 
        ReactiveFormsModule, 
        MatCardModule, 
        FlexLayoutModule, 
        MatButtonModule
    ],
    declarations: [LoginViewComponent],
    exports: [LoginViewComponent]
})
export class LoginViewModule { }