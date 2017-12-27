import { Component, OnInit } from '@angular/core';
import { MenuService } from '../common-services/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    allmenu: any = [];
    menu_id: any;
    menu_name: any;
    description: any;
    rout: any;
    status: any;
    open: boolean = false;
    isUpdate: boolean = false;

    constructor(
        private menuservice: MenuService
    ) { }

    ngOnInit() {
        this.showAllMenu();

    }
    Open() {
        this.open = true;
        this.menu_name = null;
        this.description = null;
        this.rout = null;
        this.status = null;

    }
    showAllMenu() {
        this.allmenu = [];
        this.menuservice.getAllMenu()
            .then((result: any) => {
                if (result.ok) {
                    this.allmenu = result.rows;
                    console.log(this.allmenu);
                } else {
                    console.log(JSON.stringify(result.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })

    }
    addData() {
        if (this.menu_name && this.description) {
            this.menuservice.addMenu(this.menu_name, this.description, this.status, this.rout)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllMenu();
                        this.open = false;
                        this.menu_name = null;
                        this.description = null;
                        this.rout = null;
                        this.status = null;
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ");
                    }
                }).catch(() => {
                    console.log("SERVER ERROR");
                })

        } else {
            console.log("การกรอกข้อมูล");
        }
    }
    editData(x) {
        console.log(x);
        this.menu_id = x.menu_id;
        this.menu_name = x.menu_name;
        this.description = x.description;
        this.rout = x.rout;
        this.status = x.status;
        this.isUpdate = true;
        this.open = true;
    }
    updateData() {
        // console.log(this.vardchtype);
        // console.log(this.vardchtypename);
        if (this.menu_id && this.menu_name && this.description && this.rout && this.status) {
            this.menuservice.updateMenu(this.menu_id, this.menu_name, this.description, this.status, this.rout)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลเรียบร้อย");
                        this.showAllMenu();
                        this.open = false;
                        this.menu_id = null;
                        this.menu_name = null;
                        this.description = null;
                        this.rout = null;
                        this.status = null;



                    } else {
                        console.log("แก้ไขข้อมูลไม่สำเร็จ");
                    }
                }).catch(() => {
                    console.log("SERVER ERROR");
                })

        } else {
            console.log("ข้อมูลไม่ครบ");
        }
    }
    save() {
        if (this.isUpdate) {
            this.updateData();

        } else {
            this.addData();
        }

    }
    delete(x) {

        console.log(x);
        this.menuservice.remove(x.menu_id)
            .then((results: any) => {
                if (results.ok) {
                    this.showAllMenu();
                } else {
                    console.log(results.error);
                }
            }).catch(() => {
                console.log("SERVER ERROR");
            })
    }


}
