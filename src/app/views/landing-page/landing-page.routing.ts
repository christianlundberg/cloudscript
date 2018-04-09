import { LandingPageViewModule } from './landing-page-view.module';
import { LandingPageViewComponent } from './landing-page-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LandingPageViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), LandingPageViewModule]
})
export class LandingPageRouting{
    static routes = routes;
}