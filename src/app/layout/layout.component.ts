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

    constructor(
        private menuGrpService: MenuGrpService,


    ) { }

    ngOnInit() {
        this.ShowStgGroup();
    }
    ShowStgGroup() {
        this.getMenuGrp = [];
        this.menuGrpService.getMenuGrp()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuGrp = rows.rows;
                    console.log(this.getMenuGrp);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

}
