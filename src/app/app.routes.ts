import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntegransComponent } from './integrans/integrans.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'integrants',
        component: IntegransComponent,
    }
];
