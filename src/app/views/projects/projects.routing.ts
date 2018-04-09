import { ProjectsViewModule } from './projects-view.module';
import { ProjectsViewComponent } from './projects-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProjectsViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), ProjectsViewModule]
})
export class ProjectsRouting{
    static routes = routes;
}