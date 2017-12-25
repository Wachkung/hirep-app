import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { environment } from "environments/environment.prod";


import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LayoutComponent } from './layout/layout.component';

import { AdminModule } from './admin/admin.module';

import { MenuGrpService } from './common-services/menugrp.service';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import {MenuitemService}  from './admin/common-services/menuitem.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LayoutComponent,
        LoginComponent,
        ViewComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        AdminModule,
        ROUTING
    ],
    providers: [
        { provide: 'API_URL', useValue: environment.apiUrl },
        MenuGrpService,
        MenuitemService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
