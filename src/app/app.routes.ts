import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'issues',
        loadChildren:() => import('./issues/issue.routes').then(m => m.ISSUES_ROUTES)
    }
];
