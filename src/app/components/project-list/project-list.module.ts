import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterModule
    ],
    declarations: [ProjectListComponent],
    exports: [ProjectListComponent]
})
export class ProjectListModule{}