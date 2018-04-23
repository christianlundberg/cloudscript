import { switchMap } from 'rxjs/operators/switchMap';
import { take } from 'rxjs/operators';
import { getUser } from '../../store/selectors/authentication.selectors';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { Observable } from 'rxjs/Observable';
import { getAllProjects, isLoadingProjects } from '../../store/selectors/projects.selector';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { GetAllProjects } from '../../store/actions/project.actions';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../services/project.service';

const defaultProject: Project =
    { name: '', code: { html: '', js: '', css: '' } };

@Component({
    selector: 'projects-view',
    templateUrl: './projects-view.component.html',
    styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {

    dialogRef: MatDialogRef<ProjectDialogComponent>;

    isLoading$: Observable<boolean>;

    projects$: Observable<Project[]>;

    constructor(private store: Store<AppState>, private dialog: MatDialog, private projectService: ProjectService, private router: Router) {
        this.projects$ = this.store.select(getAllProjects);
        this.isLoading$ = this.store.select(isLoadingProjects);
    }

    ngOnInit() {
        this.store.dispatch(new GetAllProjects());
    }

    onOpenDialog() {
        this.dialogRef = this.dialog.open(ProjectDialogComponent);

        const subscription = this.dialogRef.componentInstance.save.subscribe((project: Project) => this.onCreate(project));

        this.dialogRef.afterClosed().subscribe(() => subscription.unsubscribe());
    }

    onCreate(project: Project) {
        this.store.select(getUser).pipe(
            take(1),
            switchMap(user => {
                return this.projectService.create({ ...defaultProject, ...project, userId: user.uid });
            })
        ).subscribe(doc => {
            this.dialogRef.close();
            this.router.navigate(['/projects', doc.id]);
        });
    }
}