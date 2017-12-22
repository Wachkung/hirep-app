import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'hirep', pathMatch: 'full' },
    {
        path: 'hirep',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'view', component: ViewComponent },
            { path: 'login', component: LoginComponent },
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
