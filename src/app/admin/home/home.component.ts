import { Component, OnInit } from '@angular/core';
import { UserService } from '../common-services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    allUser: any = [];
    id_user: any;
    fullname: any;
    username: any;
    password: any;
    is_accept: any;
    open: boolean = false;
    isUpdate: boolean = false;

    constructor(
        private userService: UserService

    ) { }

    ngOnInit() {
        this.showAllUsers();
    }
    Open() {
        this.open = true;
        this.fullname = null;
        this.username = null;
        this.password = null;
        this.is_accept = null;

    }
    showAllUsers() {
        this.allUser = [];
        this.userService.getAllUsers()
            .then((result: any) => {
                if (result.ok) {
                    this.allUser = result.rows;
                    console.log(this.allUser);
                } else {
                    console.log(JSON.stringify(result.error));
                }
            })
            .catch(() => {
                console.log("Server Error");
            })

    }
    addData() {
        if (this.fullname && this.username && this.password) {
            this.userService.addUsers(this.fullname, this.username, this.password, this.is_accept)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("เพิ่มข้อมูลสำเร็จ");
                        this.showAllUsers();
                        this.open = false;
                        this.fullname = null;
                        this.username = null;
                        this.password = null;
                        this.is_accept = null;
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
        this.id_user = x.id_user;
        this.fullname = x.fullname;
        this.username = x.username;
        this.password = x.password;
        this.is_accept = x.is_accept;
        this.isUpdate = true;
        this.open = true;
    }
    updateData() {
        // console.log(this.vardchtype);
        // console.log(this.vardchtypename);
        if (this.id_user && this.fullname && this.username && this.password && this.is_accept) {
            this.userService.updateUsers(this.id_user, this.fullname, this.username, this.password, this.is_accept)
                .then((results: any) => {
                    if (results.ok) {
                        console.log("แก้ไขข้อมูลเรียบร้อย");
                        this.showAllUsers();
                        this.open = false;
                        this.id_user = null;
                        this.fullname = null;
                        this.username = null;
                        this.password = null;
                        this.is_accept = null;



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
        this.userService.remove(x.id_user)
            .then((results: any) => {
                if (results.ok) {
                    this.showAllUsers();
                } else {
                    console.log(results.error);
                }
            }).catch(() => {
                console.log("SERVER ERROR");
            })
    }



}
