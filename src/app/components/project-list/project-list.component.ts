import { Project } from '../../models/project';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent{

    @Input() projects: Project[];

}