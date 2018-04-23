import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        loadChildren: './views/landing-page/landing-page.routing#LandingPageRouting'
    },
    { 
        path: 'login', 
        canLoad: [NotAuthenticatedGuard],
        loadChildren: './views/login/login.routing#LoginRouting' 
    },
    { 
        path: 'sign-up', 
        canLoad: [NotAuthenticatedGuard],
        loadChildren: './views/sign-up/sign-up.routing#SignUpRouting' 
    },
    { 
        path: 'projects', 
        loadChildren: './views/projects/projects.routing#ProjectsRouting', 
        pathMatch: 'full',
        canLoad: [AuthenticatedGuard] 
    },
    { 
        path: 'projects/:id', 
        loadChildren: './views/project/project.routing#ProjectRouting' 
    }
    // { path: '**', component: PageNotFoundComponent }
];