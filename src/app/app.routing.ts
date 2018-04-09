import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', loadChildren: './views/landing-page/landing-page.routing#LandingPageRouting'},
    { path: 'login', loadChildren: './views/login/login.routing#LoginRouting' },
    { path: 'sign-up', loadChildren: './views/sign-up/sign-up.routing#SignUpRouting' },
    { path: 'projects/:id', loadChildren: './views/project/project.routing#ProjectRouting' }
    // { path: '**', component: PageNotFoundComponent }
];