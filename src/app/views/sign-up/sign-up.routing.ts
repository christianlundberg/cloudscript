import { SignUpViewModule } from './sign-up-view.module';
import { SignUpViewComponent } from './sign-up-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SignUpViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SignUpViewModule]
})
export class SignUpRouting{
    static routes = routes;
}