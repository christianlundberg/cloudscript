import { LoginViewModule } from './login-view.module';
import { LoginViewComponent } from './login-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), LoginViewModule]
})
export class LoginRouting{
    static routes = routes;
}