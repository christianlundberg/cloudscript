import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { getProject, isLoadingProject } from '../../store/selectors/project.selectors';
import { Project } from '../../models/project';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { GetProject, UpdateProject } from '../../store/actions/project.actions';

@Component({
    selector: 'project-view',
    templateUrl: './project-view.component.html'
})
export class ProjectViewComponent implements OnInit{

    isLoading$: Observable<boolean>;

    project$: Observable<Project>;

    constructor(private store: Store<AppState>){
        this.isLoading$ = this.store.select(isLoadingProject);
        this.project$ = this.store.select(getProject);
    }

    ngOnInit(){
        this.store.dispatch(new GetProject());
    }

    onUpdate(project: Project){
        this.store.dispatch(new UpdateProject(project));
    }
    
}