import { switchMap } from 'rxjs/operators/switchMap';
import { take } from 'rxjs/operators';
import { getUser } from '../../store/selectors/authentication.selectors';
import { AppState } from '../../store/reducers/index';
import { Store } from '@ngrx/store';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

const defaultProject: Project =
    { name: '', code: { html: '', js: '', css: ''} };


@Component({
    selector: 'landing-page-view',
    templateUrl: './landing-page-view.component.html',
    styleUrls: ['./landing-page-view.component.scss'],
    providers: [ProjectService]
})
export class LandingPageViewComponent {

    private dialogRef: MatDialogRef<ProjectDialogComponent>;

    constructor(private store: Store<AppState>, private dialog: MatDialog, private projectService: ProjectService, private router: Router) {}

    onOpenDialog(){
        this.dialogRef = this.dialog.open(ProjectDialogComponent);

        const subscription = this.dialogRef.componentInstance.save.subscribe((project: Project) => this.onCreate(project));

        this.dialogRef.afterClosed().subscribe(() => subscription.unsubscribe());
    }
    
    onCreate(project: Project) {
        this.store.select(getUser).pipe(
            take(1),
            switchMap(user => {
                return this.projectService.create({ ...defaultProject, ...project, userId: user ? user.uid : null });
            })
        ).subscribe(doc => {
            this.dialogRef.close();
            this.router.navigate(['/projects', doc.id]);
        });
    }
}