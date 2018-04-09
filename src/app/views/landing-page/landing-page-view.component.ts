import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

const defaultProject: Project =
    { name: '', code: { html: '', js: '', css: ''} }


@Component({
    selector: 'landing-page-view',
    templateUrl: './landing-page-view.component.html',
    styleUrls: ['./landing-page-view.component.scss'],
    providers: [ProjectService]
})
export class LandingPageViewComponent {

    constructor(private projectService: ProjectService, private router: Router) {
        
    }

    onCreate() {
        this.projectService.create(defaultProject).then(doc => this.router.navigate(['/projects', doc.id]))
    }
}