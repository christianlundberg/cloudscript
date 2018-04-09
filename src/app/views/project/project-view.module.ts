import { CommonModule } from '@angular/common';
import { ProjectFormModule } from '../../components/project-form/project-form.module';
import { FormsModule } from '@angular/forms';
import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [CommonModule, MatProgressSpinnerModule, FlexLayoutModule, MatCardModule, FormsModule, MatButtonModule, ProjectFormModule],
    declarations: [ProjectViewComponent],
    exports: [ProjectViewComponent]
})
export class ProjectViewModule { }