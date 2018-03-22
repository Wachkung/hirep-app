import { Component, OnInit } from '@angular/core';
import { MenuGrpService } from '../common-services/menugrp.service';
import { ActivatedRoute, Router, Params, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    getMenuGrp: any = [];
    getMenuTyp: any = [];
    getSubItem: any = [];
    getRout: any = [];
    menu_id: any;
    // var_menu_id: any;
    i: any;
    item_id: any = [];
    sub_id: any;
    // var_item_id: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private menuGrpService: MenuGrpService,
    ) { }

    ngOnInit() {
        this.ShowMenuGroup();
        // this.ShowMenu();
        this.ShowItemAll();
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
        this.item_id = [null];
        this.menu_id = menu_id;
        // console.log(this.menu_id);
        this.getMenuTyp = [];
        this.menuGrpService.getMenuItem(this.menu_id)
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuTyp = rows.rows;
                    console.log(this.getMenuTyp);
                    console.log(this.getMenuTyp.length);


                    for (this.i = 0; this.i < this.getMenuTyp.length; this.i++) {
                        this.item_id[this.i] = this.getMenuTyp[this.i].item_id

                    }

                    console.log(this.item_id);
                    this.getSubItem = [];
                    this.menuGrpService.getSubItem(this.item_id)
                        .then((res: any) => {
                            if (rows.ok) {
                                this.getSubItem = res.rows;
                                console.log(this.getSubItem);
                            } else {
                                console.log(JSON.stringify(res.error));
                            }
                        })
                        .catch(() => {
                            console.log("Server Error")
                        })


                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }

    ShowItemAll() {
        this.item_id = [null];
        // this.menu_id = menu_id;
        // console.log(this.menu_id);
        this.getMenuTyp = [];
        this.menuGrpService.getItemAll()
            .then((rows: any) => {
                if (rows.ok) {
                    this.getMenuTyp = rows.rows;
                    console.log(this.getMenuTyp);
                    console.log(this.getMenuTyp.length);


                    for (this.i = 0; this.i < this.getMenuTyp.length; this.i++) {
                        this.item_id[this.i] = this.getMenuTyp[this.i].item_id

                    }

                    console.log(this.item_id);
                    this.getSubItem = [];
                    this.menuGrpService.getSubItem(this.item_id)
                        .then((res: any) => {
                            if (rows.ok) {
                                this.getSubItem = res.rows;
                                console.log(this.getSubItem);
                            } else {
                                console.log(JSON.stringify(res.error));
                            }
                        })
                        .catch(() => {
                            console.log("Server Error")
                        })


                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }


}
