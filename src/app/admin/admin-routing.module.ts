import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';
import { LayoutadmComponent } from './layoutadm/layoutadm.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
    // { path: '', redirectTo: 'admin/home', pathMatch: 'full' }, // กำหมด Path ให้วิง ไปที่ client/Home
    {
        path: 'admin',   // กำหมด Path ในการทำงาน
        component: LayoutadmComponent, // ดึง layrep.component.html มาแสดง
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'menu', component: MenuComponent },
            { path: 'menuitem', component: MenuitemComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
