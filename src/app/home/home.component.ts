import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HirepService } from '../common-services/hirep.service';
import * as CryptoJS from 'crypto-js';

import * as _ from 'lodash';
import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [HirepService],
    styles: ['.error {color:red;}']
})

export class HomeComponent implements OnInit {
    errorMessage: string;

    today: any[] = [];
    todaytotal: any[] = [];
    todaytype: any[] = [];
    revier: any[] = [];
    opicdtm: any[] = [];
    ericdtm: any[] = [];
    dticdtm: any[] = [];
    reopuc: any[] = [];
    todaymenu: any[] = [];
    todaytotalmenu: any[] = [];
    todaytypemenu: any[] = [];
    reviermenu: any[] = [];
    opicdtmmenu: any[] = [];
    ericdtmmenu: any[] = [];
    dticdtmmenu: any[] = [];
    reopucmenu: any[] = [];
    bed: any[] = [];
    bedmenu: any[] = [];
    referout: any[] = [];
    referoutmenu: any[] = [];
    referback: any[] = [];
    referbackmenu: any[] = [];
    refersocial: any[] = [];
    refersocialmenu: any[] = [];
    opddead: any[] = [];
    opddeadmenu: any[] = [];
    ipddead: any[] = [];
    ipddeadmenu: any[] = [];
    lrbirth: any[] = [];
    lrbirthmenu: any[] = [];
    lrwait: any[] = [];
    lrwaitmenu: any[] = [];

    rowLength: any;
    date: Date = new Date();
    mode = 'Promise';

    tableDatas: any = [];
    fieldDatas: any = [];

    constructor(private hirepService: HirepService) { }

    ngOnInit() {
        this.showToday();
        this.showTodaytotal();
        this.showTodaytype();
        this.showRevier();
        this.showOpicdtm();
        this.showEricdtm();
        this.showDticdtm();
        this.showReopuc();
        this.showBed();
        this.showTodayReferOut();
        this.showTodayReferBack();
       this.showTodayReferOut();
       this.showTodayOpdDead();
       this.showTodayIpdDead();
       this.showTodayReferSocial();
       this.showTodayLrBirth();
       this.showTodayLrWait();
        //  this.showPass();

    }

    showToday() {
        this.today = [];
        this.hirepService.getToday()
            .then((result: any) => {
                if (result.ok) {
                    this.today = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.todaymenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showTodaytotal() {
        this.todaytotal = [];
        this.hirepService.getTodaytotal()
            .then((result: any) => {
                if (result.ok) {
                    this.todaytotal = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.todaytotalmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.todaytotal);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showTodaytype() {
        this.todaytype = [];
        this.hirepService.getTodaytype()
            .then((result: any) => {
                if (result.ok) {
                    this.todaytype = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.todaytypemenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.todaytype);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showRevier() {
        this.revier = [];
        this.hirepService.getRevier()
            .then((result: any) => {
                const datas = [];
                if (result.ok) {
                    const _datafield = [];
                    this.revier = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.reviermenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log("reviermenu");
                    // console.log(this.reviermenu);
                    // console.log("this.revier");
                    // console.log(this.revier);

                    _.forEach(this.reviermenu, (v, k) => {  // ดึงข้อมูล colums ไปเก็บไว้ที่ _datafield
                        _datafield.push(v.name);
                    })

                    // this.rowLength = this.revier.length;
                    // this.tableDatas = Array.of(this.revier).length;
                    // console.log(this.tableDatas);

                    this.revier.forEach(v => {   // ดึงข้อมูล roows ไปเก็บไว้ที่ _data
                        let _data = [];
                        _.forEach(v, x => {
                            _data.push(x);
                        });
                        this.tableDatas.push(_data);  // ส่งค่า _data ไปเก็บใน this.tableDatas เพื่อไปแสดงหน้า thml
                    });
                    this.fieldDatas = _datafield;  // ส่งค่า _datafield ไปเก็บใน this.fieldDatas เพื่อไปแสดงหน้า thml
                    // console.log("Data Field");
                    // console.log(this.fieldDatas);
                    // console.log("table datas");
                    // console.log(this.tableDatas);
                }
            }).catch(error => {
                console.log(error);
            })
    }


    showOpicdtm() {
        this.opicdtm = [];
        this.hirepService.getOpicdtm()
            .then((result: any) => {
                if (result.ok) {
                    this.opicdtm = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.opicdtmmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.opicdtm);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showEricdtm() {
        this.ericdtm = [];
        this.hirepService.getEricdtm()
            .then((result: any) => {
                if (result.ok) {
                    this.ericdtm = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.ericdtmmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.ericdtm);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showReopuc() {
        this.reopuc = [];
        this.hirepService.getReopuc()
            .then((result: any) => {
                if (result.ok) {
                    this.reopuc = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.reopucmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    console.log(this.reopuc);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showDticdtm() {
        this.dticdtm = [];
        this.hirepService.getDticdtm()
            .then((result: any) => {
                if (result.ok) {
                    this.dticdtm = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.dticdtmmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.dticdtm);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showBed() {
        this.bed = [];
        this.hirepService.getBed()
            .then((result: any) => {
                if (result.ok) {
                    this.bed = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.bedmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showTodayReferOut() {
        this.referout = [];
        this.hirepService.getTodayReferOut()
            .then((result: any) => {
                if (result.ok) {
                    this.referout = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.referoutmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showTodayReferBack() {
        this.referback = [];
        this.hirepService.getTodayReferBack()
            .then((result: any) => {
                if (result.ok) {
                    this.referback = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.referbackmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    showTodayReferSocial() {
        this.refersocial = [];
        this.hirepService.getTodayReferSocial()
            .then((result: any) => {
                if (result.ok) {
                    this.refersocial = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.refersocialmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }



    showTodayOpdDead() {
        this.opddead = [];
        this.hirepService.getTodayopddead()
            .then((result: any) => {
                if (result.ok) {
                    this.opddead = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.opddeadmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showTodayIpdDead() {
        this.ipddead = [];
        this.hirepService.getTodayipddead()
            .then((result: any) => {
                if (result.ok) {
                    this.ipddead = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.ipddeadmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showTodayLrBirth() {
        this.lrbirth = [];
        this.hirepService.getTodaylrbrith()
            .then((result: any) => {
                if (result.ok) {
                    this.lrbirth = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.lrbirthmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }

    showTodayLrWait() {
        this.lrwait = [];
        this.hirepService.getTodaylrWait()
            .then((result: any) => {
                if (result.ok) {
                    this.lrwait = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.lrwaitmenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้

                    // console.log(this.today);
                    // console.log(this.today[0]);
                }
            }).catch(error => {
                console.log(error);
            })
    }




}
