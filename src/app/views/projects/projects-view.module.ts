import { ProjectDialogModule } from '../../components/project-dialog/project-dialog.module';
import { ProjectListModule } from '../../components/project-list/project-list.module';
import { CommonModule } from '@angular/common';
import { ProjectsViewComponent } from './projects-view.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        ProjectDialogModule,
        ProjectListModule,
        MatDialogModule,
        CommonModule,
        MatProgressSpinnerModule,
        FlexLayoutModule, 
        MatButtonModule, 
        MatIconModule, 
        MatCardModule
    ],
    declarations: [ProjectsViewComponent],
    exports: [ProjectsViewComponent]
})
export class ProjectsViewModule { }