import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from '../../models/project';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'project-form',
    templateUrl: './project-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFormComponent implements OnChanges, OnInit {

    @Input() project: Project;

    @Output() update = new EventEmitter();

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: '',
            code: fb.group({
                html: '',
                js: '',
                css: ''
            })
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.project)
            this.form.patchValue(this.project, { emitEvent: false });
    }

    ngOnInit() {
        this.form.valueChanges
        .pipe(debounceTime(1000))
        .subscribe(value => (console.log(value),this.update.emit(value)));
    }
}