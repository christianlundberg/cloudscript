import { ProjectsViewComponent } from './projects-view.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [MatButtonModule, MatIconModule],
    declarations: [ProjectsViewComponent],
    exports: [ProjectsViewComponent]
})
export class ProjectsViewModule { }