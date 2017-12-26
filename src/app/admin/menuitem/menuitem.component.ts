import { Component, OnInit } from '@angular/core';
import {MenuitemService}  from '../common-services/menuitem.service'
@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {
  allmenuitem: any = [];
  varmenu_id: any;
  varitem_name: any;
  varcomment: any;
  varitem_status:any;
  open: boolean = false;
  varitem_id:any;
  isUpdate: boolean = false;
  //vardeleteitem_id:any;
   

  constructor(
    private menuitemservice: MenuitemService

  ) { }

  ngOnInit() {

this.showAllMenuitem();
  }

showAllMenuitem() {
    //cler ค่า
    this.allmenuitem = [];
    this.menuitemservice.getAllMenuitem()
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


  addData() {
    console.log(this.varmenu_id);
    console.log(this.varitem_name);
    console.log(this.varcomment);
    console.log(this.varitem_status);

    if (this.varmenu_id && this.varitem_name) {
      this.menuitemservice.addMenuItem(this.varmenu_id, this.varitem_name,this.varcomment,this.varitem_status)
        .then((results: any) => {
          if (results.ok) {
            console.log("เพิ่มข้อมูลสำเร็จ");
            this.showAllMenuitem;
            this.open = false;
            this.varmenu_id = null;
            this.varitem_name = null;
            this.varcomment = null;
            this.varitem_status = null;
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
    this.varitem_id = x.item_id;
    this.varmenu_id = x.menu_id;
    this.varitem_name = x.item_name;
    this.varcomment = x.comment;
    this.varitem_status = x.item_status;
    this.isUpdate = true;
    this.open = true;
  }


  updateData() {
    // console.log(this.vardchtype);
    // console.log(this.vardchtypename);
    if (this.varitem_id && this.varmenu_id && this.varitem_name && this.varcomment&& this.varitem_status) {
      this.menuitemservice.updateMenuitems(this.varitem_id , this.varmenu_id , this.varitem_name , this.varcomment, this.varitem_status)
        .then((results: any) => {
          if (results.ok) {
            console.log("แก้ไขข้อมูลเรียบร้อย");
            this.showAllMenuitem();
            this.open = false;
            this.varmenu_id = null;
            this.varitem_name = null;
            this.varcomment = null;
            this.varitem_status = null;



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
    this.menuitemservice.remove(x.item_id)
      .then((results: any) => {
        if (results.ok) {
          this.showAllMenuitem();
        } else {
          console.log(results.error);
        }
      }).catch(() => {
        console.log("SERVER ERROR");
      })
  }
   








}
