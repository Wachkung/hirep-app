import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DtrComponent } from './dtr/dtr.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'hirep', pathMatch: 'full' },
    {
        path: 'hirep',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'dtr', component: DtrComponent },
            { path: 'login', component: LoginComponent },
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
