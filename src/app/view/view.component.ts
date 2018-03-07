import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ViewreportService } from '../common-services/viewreport.service';
import * as CryptoJS from 'crypto-js';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import * as moment from 'moment';


// import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    providers: [ViewreportService],
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    errorMessage: string;
    open: boolean = false;
    isUpdate: boolean = false;

    Dataviews: any[] = [];
    AllMenu: any[] = [];
    subitems: any[] = [];
    getSubItem: any = [];
    menu_id: any;
    item_id: any;

    sub_id: any;
    sql: any;
    params: any;
    param_x: any = [];
    param_xx: any = [];
    param: any = [];

    rowLength: any;
    date: Date = new Date();
    mode = 'Promise';

    tableDatas: any = [];
    fieldDatas: any = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private viewreportService: ViewreportService
    ) {
        this.route.params.subscribe(params => {
            this.sub_id = params['menu_id'];
            this.fieldDatas = [null];
            this.tableDatas = [null];

            // console.log(this.sub_id);
            this.showDatas(this.sub_id);
        })
        // console.log(this.route.params);
    }

    ngOnInit() {
        // this.showDatas();
        // this.sub_id = this.nav.get(sub_item_id)

    }

    showDatas(sub_id) {
        // this.nav.get(sub_id)
        // this.sub_id = '1';   // ส่งค่ามาจาก เมนู
        this.subitems = [];
        this.param_xx = [];
        this.viewreportService.selectReport(this.sub_id)
            .then((result: any) => {
                if (result.ok) {
                    this.subitems = result.rows;   // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.sql = this.subitems[0].query_sql
                    this.params = this.subitems[0].query_params
                    // console.log(this.subitems);
                    // console.log(this.sql);
                    // console.log(this.params);
                    if (this.params) {
                        this.open = true;
                        this.param_xx = this.params.split(",");
                    //    console.log(this.param_xx);
                    } else {
                        this.open = false;
                    }
                    // console.log("param xx:" + this.param_xx);
                    // console.log("params :" + this.params);
                    // console.log("param index:" + this.param);
                    this.Dataviews = [];
                    this.viewreportService.viewReport(this.sql, this.params)
                        .then((res: any) => {
                            const datas = [];
                            if (res.ok) {
                                const _datafield = [];
                                this.Dataviews = res.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                                // console.log("data:" + this.Dataviews);
                                this.AllMenu = res.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                                // console.log("reviermenu");
                                // console.log(this.reviermenu);
                                // console.log("this.revier");
                                // console.log(this.revier);

                                _.forEach(this.AllMenu, (v, k) => {  // ดึงข้อมูล colums ไปเก็บไว้ที่ _datafield
                                    _datafield.push(v.name);
                                })

                                // this.rowLength = this.revier.length;
                                // this.tableDatas = Array.of(this.revier).length;
                                // console.log(this.tableDatas);

                                this.Dataviews.forEach(v => {   // ดึงข้อมูล roows ไปเก็บไว้ที่ _data
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
                            console.log("eror:" + error);
                        })

                }
            }).catch(error => {
                console.log(error);
            })
    }

    updateParam(xx, inputdata, idx) {
        // let i: any;
        let param: any;     
        // console.log(xx);
        // console.log(inputdata.value);
        // console.log(idx);
        let name: any = xx;
        let data: any = inputdata.value;
        // let id = (idx + 1);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.param[idx] = { name, data };

        // console.log(this.param);
    }



    showParams() {
        this.open = false;

        let i: any;
        let x: any;
        let xx: any;

        for (i = 0; i < this.param.length; i++) {
            x = this.param[i].name;
            xx = this.param[i].data;
            console.log(xx);

            this.param_x[i] = xx;
        }

        //console.log(this.param_x);
        //console.log(this.sql);

        this.params = this.param_x;
        //console.log("send params:" + this.params);
        // this.params = ['2004-10-01', '2017-10-31', 'I10'];
        this.Dataviews = [];
        this.viewreportService.viewReport(this.sql, this.params)
            .then((res: any) => {
                const datas = [];
                if (res.ok) {
                    const _datafield = [];
                    // console.log("raw data: " + res.rows);
                    this.Dataviews = res.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log("data:" + this.Dataviews);
                    this.AllMenu = res.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log("reviermenu");
                    // console.log(this.AllMenu);
                    // console.log("this.revier");
                    // console.log(this.revier);

                    _.forEach(this.AllMenu, (v, k) => {  // ดึงข้อมูล colums ไปเก็บไว้ที่ _datafield
                        _datafield.push(v.name);
                    })

                    // this.rowLength = this.revier.length;
                    // this.tableDatas = Array.of(this.revier).length;
                    // console.log(this.tableDatas);

                    this.Dataviews.forEach(v => {   // ดึงข้อมูล roows ไปเก็บไว้ที่ _data
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

}
