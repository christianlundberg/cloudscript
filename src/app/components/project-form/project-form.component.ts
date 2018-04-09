import { Project } from '../../models/project';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'project-form',
    templateUrl: './project-form.component.html'
})
export class ProjectFormComponent{

    @Input() project: Project;

    @Output() update = new EventEmitter();

    onChange(){
        this.update.emit(this.project);
    }
}