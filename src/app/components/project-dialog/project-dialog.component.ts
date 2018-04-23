import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'project-dialog',
    templateUrl: './project-dialog.component.html'
})
export class ProjectDialogComponent{

    @Output() save = new EventEmitter();

    form: FormGroup;

    constructor(private dialogRef: MatDialogRef<ProjectDialogComponent>, fb: FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required]
        });
    }

    onSave(){
        this.save.emit(this.form.value);
    }

    onCancel(){
        this.dialogRef.close();
    }
}