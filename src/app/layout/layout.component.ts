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
    var_menu_id: any;
    constructor(
        private menuGrpService: MenuGrpService,
    ) { }

    ngOnInit() {
        this.ShowMenuGroup();
        // this.ShowMenu();
    }
    ShowMenuGroup() {
        this.getMenuGrp = [];
        this.menuGrpService.getMenuGrp()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuGrp = rows.rows;
                    // console.log(this.getMenuGrp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }
    ShowMenu(menu_id) {
        this.menu_id = menu_id;
        // console.log(this.menu_id);
        this.getMenuTyp = [];
        this.menuGrpService.getMenuItem(this.menu_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuTyp = rows.rows;
                    // console.log(this.getMenuTyp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

}
