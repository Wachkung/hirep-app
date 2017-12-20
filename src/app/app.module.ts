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


import { MenuGrpService } from './common-services/menugrp.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [
        { provide: 'API_URL', useValue: environment.apiUrl },
        MenuGrpService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
