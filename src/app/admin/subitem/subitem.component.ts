import { Component, OnInit } from '@angular/core';
import { MenuSubService } from '../common-services/menusub.service';
import { MenuitemService } from '../common-services/menuitem.service';

@Component({
    selector: 'app-subitem',
    templateUrl: './subitem.component.html',
    styleUrls: ['./subitem.component.scss']
})
export class SubitemComponent implements OnInit {
    allmenuitem: any = [];
    allSubitem: any = [];
    sub_item_id: any;
    item_id: any;
    sub_item_name: any;
    query_sql: any;
    query_params: any;
    template: any;
    comment: any;
    sub_item_status: any;
    open: boolean = false;
    isUpdate: boolean = false;

    constructor(
        private menuSunService: MenuSubService,
        private menuItemService: MenuitemService,

    ) { }

    ngOnInit() {
        this.showAllMenuSub();
        this.showAllMenuitem()
    }
    Open() {
        this.open = true;
        this.isUpdate = false;

        this.item_id = null;
        this.sub_item_name = null;
        this.query_sql = null;
        this.query_params = null;
        this.template = null;
        this.comment = null;
        this.sub_item_status = null;
    }

    showAllMenuitem() {
        // cler ค่า
        this.allmenuitem = [];

        this.menuItemService.getAllMenuitem()
            .then((result: any) => {
                if (result.ok) {
                    this.allmenuitem = result.rows;
                    console.log(this.allmenuitem);
                } else {
                    console.log(JSON.stringify(result.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })

    }

    showAllMenuSub() {
        // cler ค่า
        this.allSubitem = [];

        this.menuSunService.getAllMenuSub()
            .then((result: any) => {
                if (result.ok) {
                    this.allSubitem = result.rows;
                    console.log(this.allSubitem);
                } else {
                    console.log(JSON.stringify(result.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })

    }
    addData() {
        console.log(this.item_id);
        console.log(this.sub_item_name);
        console.log(this.query_sql);
        console.log(this.query_params);
        console.log(this.template);
        console.log(this.comment);
        console.log(this.sub_item_status);

        if (this.item_id && this.sub_item_name && this.query_sql) {
            this.menuSunService.addMenuSub(
                this.item_id,
                this.sub_item_name,
                this.query_sql,
                this.query_params,
                this.template,
                this.comment,
                this.sub_item_status)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllMenuSub();
                        this.open = false;
                        this.isUpdate = false;
<<<<<<< HEAD
=======

>>>>>>> 6da6f93320395fc479c9e16953f879d7a60a8c38
                        this.item_id = null;
                        this.sub_item_name = null;
                        this.query_sql = null;
                        this.query_params = null;
                        this.template = null;
                        this.comment = null;
                        this.sub_item_status = null;
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
        this.sub_item_id = x.sub_item_id;
        this.item_id = x.item_id;
        this.sub_item_name = x.sub_item_name;
        this.query_sql = x.query_sql;
        this.query_params = x.query_params;
        this.template = x.template;
        this.comment = x.comment;
        this.sub_item_status = x.sub_item_status;
        this.isUpdate = true;
        this.open = true;
    }
    updateData() {
        // console.log(this.vardchtype);
        // console.log(this.vardchtypename);
        if (this.item_id && this.sub_item_name && this.query_sql) {
            this.menuSunService.updateMenuSub(
                this.sub_item_id,
                this.item_id,
                this.sub_item_name,
                this.query_sql,
                this.query_params,
                this.template,
                this.comment,
                this.sub_item_status)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลเรียบร้อย");
                        this.showAllMenuSub();
                        this.open = false;
                        this.isUpdate = false;

                        this.item_id = null;
                        this.sub_item_name = null;
                        this.query_sql = null;
                        this.query_params = null;
                        this.template = null;
                        this.comment = null;
                        this.sub_item_status = null;



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
        this.menuSunService.remove(x.sub_item_id)
            .then((results: any) => {
                if (results.ok) {
                    this.showAllMenuSub();
                } else {
                    console.log(results.error);
                }
            }).catch(() => {
                console.log("SERVER ERROR");
            })
    }

}
