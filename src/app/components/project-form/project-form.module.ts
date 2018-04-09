import { ProjectFormComponent } from './project-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditorModule } from '../../components/editor/editor.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    imports: [FormsModule, MatInputModule, MatIconModule, FlexLayoutModule, MatTabsModule, EditorModule],
    declarations: [ProjectFormComponent],
    exports: [ProjectFormComponent]
})
export class ProjectFormModule { }