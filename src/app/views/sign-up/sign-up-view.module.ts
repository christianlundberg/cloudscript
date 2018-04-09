import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpViewComponent } from './sign-up-view.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [MatCardModule, MatIconModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, FlexLayoutModule],
    declarations: [SignUpViewComponent],
    exports: [SignUpViewComponent]
})
export class SignUpViewModule { }