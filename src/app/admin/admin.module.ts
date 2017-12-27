import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutadmComponent } from './layoutadm/layoutadm.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { MenuitemService } from '../admin/common-services/menuitem.service';
import { MenuService } from '../admin/common-services/menu.service';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [HomeComponent, LayoutadmComponent, MenuitemComponent],
    providers: [
        MenuitemService,
        MenuService,

    ],
})
export class AdminModule { }
