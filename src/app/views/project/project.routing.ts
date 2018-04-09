import { ProjectViewModule } from './project-view.module';
import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProjectViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), ProjectViewModule]
})
export class ProjectRouting{
    static routes = routes;
}