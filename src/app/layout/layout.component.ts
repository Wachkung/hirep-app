import { Component, OnInit } from '@angular/core';
import { MenuGrpService } from '../common-services/menugrp.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    getMenuGrp: any = [];
    getMenuTyp: any = [];
    getRout: any = [];
    menu_id: any;

    constructor(
        private menuGrpService: MenuGrpService,


    ) { }

    ngOnInit() {
        this.ShowMenuGroup();
        this.ShowMenu();
    }
    ShowMenuGroup() {
        this.getMenuGrp = [];

        this.menuGrpService.getMenuGrp()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuGrp = rows.rows;
                    // let menu_id = this.getMenuGrp;

                    console.log(this.getMenuGrp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }
    ShowMenu() {
        this.getMenuTyp = [];
        this.menuGrpService.getMenuItem(this.getMenuGrp.menu_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuTyp = rows.rows;
                    console.log(this.getMenuTyp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })

    }

}
