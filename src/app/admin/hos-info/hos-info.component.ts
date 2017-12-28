import { Component, OnInit } from '@angular/core';
import{HosInfoService} from '../common-services/hos-info.service'

@Component({
  selector: 'app-hos-info',
  templateUrl: './hos-info.component.html',
  styleUrls: ['./hos-info.component.scss']
})
export class HosInfoComponent implements OnInit {
  allhosinfo: any = [];
  var_id:any;
  varheader:any;
  vardata:any;
  varcomment:any;
  open: boolean = false;
  isUpdate: boolean = false;
 
 


  constructor(
   private hosinfoservice :HosInfoService
  ) { }

  ngOnInit() { this.showAllHosInfo();
  }
  /// fuction
  showAllHosInfo() {
    //cler ค่า
    this.allhosinfo = [];

    this.hosinfoservice.getAllHosInfo()
      .then((result: any) => {
        if (result.ok) {
          this.allhosinfo = result.rows;
          console.log(this.allhosinfo);
        } else {
          console.log(JSON.stringify(result.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      })

  }

  addData() {
    console.log(this.varheader);
    console.log(this.vardata);
    console.log(this.varcomment)


    if (this.varheader && this.vardata && this.varcomment) {
      this.hosinfoservice.addHosinfo(this.varheader, this.vardata,this.varcomment)
        .then((results: any) => {
          if (results.ok) {
            console.log("เพิ่มข้อมูลสำเร็จ");
            this.showAllHosInfo;
            this.open = false;
            this.varheader = null;
            this.vardata = null;
            this.varcomment = null;
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
    this.var_id = x.id;
    this.varheader = x.header;
    this.vardata = x.data;
    this.varcomment= x.comment;
    this.isUpdate = true;
    this.open = true;
  }

  updateData() {
    // console.log(this.vardchtype);
    // console.log(this.vardchtypename);
    if (this.var_id && this.varheader,this.vardata,this.varcomment) {
      this.hosinfoservice.updateHosinfo(this.var_id, this.varheader,this.vardata,this.varcomment)
        .then((results: any) => {
          if (results.ok) {
            console.log("แก้ไขข้อมูลเรียบร้อย");
            this.showAllHosInfo();
            this.open = false;
            this.varheader = null;
            this.vardata = null;
            this.varcomment = null;
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
    this.hosinfoservice.remove(x.id)
      .then((results: any) => {
        if (results.ok) {
          this.showAllHosInfo();
        } else {
          console.log(results.error);
        }
      }).catch(() => {
        console.log("SERVER ERROR");
      })
  }








}
