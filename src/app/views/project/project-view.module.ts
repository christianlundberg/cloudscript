import { EditorModule } from '../../components/editor/editor.module';
import { FormsModule } from '@angular/forms';
import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [FlexLayoutModule, MatCardModule, FormsModule, MatButtonModule, MatTabsModule, EditorModule],
    declarations: [ProjectViewComponent],
    exports: [ProjectViewComponent]
})
export class ProjectViewModule { }