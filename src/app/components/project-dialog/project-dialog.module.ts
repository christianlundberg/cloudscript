import { ProjectDialogComponent } from './project-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, FlexLayoutModule, MatInputModule],
    declarations: [ProjectDialogComponent],
    entryComponents: [ProjectDialogComponent]
})
export class ProjectDialogModule{}