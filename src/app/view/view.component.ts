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

import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { AmpurService } from '../common-services/ampur.service';
import { ClnService } from '../common-services/cln.service';
import { PcuService } from '../common-services/pcu.service';

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

    ampur: any[] = [];
    cln: any[] = [];
    pcu: any[] = [];


    getSubItem: any = [];
    menu_id: any;
    item_id: any;
    title_name: any;
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
        private viewreportService: ViewreportService,
        private ampurService: AmpurService,
        private clnService: ClnService,
        private pcuService: PcuService

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
        this.showAmpur();
        this.showCln();
        // this.showDatas();
        // this.sub_id = this.nav.get(sub_item_id)
    }

    showAmpur() {
        this.ampur = [];
        this.ampurService.selectAmpur()
            .then((result: any) => {
                if (result.ok) {
                    this.ampur = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    console.log(this.ampur);
                }
            }).catch(error => {
                console.log(error);

            })

    }

    showCln() {
        this.cln = [];
        this.clnService.selectCln()
            .then((result: any) => {
                if (result.ok) {
                    this.cln = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    console.log(this.cln);
                }
            }).catch(error => {
                console.log(error);

            })

    }
    showPcu(ampur) {
        this.pcu = [];
        this.pcuService.selectPcu(ampur)
            .then((result: any) => {
                if (result.ok) {
                    this.pcu = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    console.log(this.pcu);
                }
            }).catch(error => {
                console.log(error);

            })

    }

    exportToExcel() {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: false,
            useBom: true,
            headers: [this.fieldDatas]
        };
        // let excelDatas = this.Dataviews;

        new Angular2Csv(this.Dataviews, this.title_name, options);
        // this.excelService.exportAsExcelFile(excelDatas, this.tableName);

    }


    showDatas(sub_id) {
        // this.nav.get(sub_id)
        // this.sub_id = '1';   // ส่งค่ามาจาก เมนู
        this.subitems = [];
        this.param_xx = [];
        this.param_x = [null];
        this.param = [null];

        this.viewreportService.selectReport(this.sub_id)
            .then((result: any) => {
                if (result.ok) {
                    this.subitems = result.rows;   // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.sql = this.subitems[0].query_sql
                    this.params = this.subitems[0].query_params
                    this.title_name = this.subitems[0].sub_item_name
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
                                console.log(this.tableDatas);
                            }
                        }).catch(error => {
                            console.log("eror:" + error);
                        })

                }
            }).catch(error => {
                console.log(error);
            })
    }
    KeyParam(xx, input, idx) {
        // let i: any;
        // this.params = [null];
        // this.param = [null];

        let param: any;
        console.log(xx);
        console.log(input.value);
        console.log(idx);
        let name: any = xx;
        let data: any = input.value;
        // let id = (idx + 1);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.param[idx] = { name, data };
        // console.log(this.param);
    }
    Paramampur(xx, input, idx, param_xx) {
        // let i: any;
        // this.params = [null];
        // this.param = [null];

        let param: any;
        console.log(xx);
        console.log(input.value);
        console.log(idx);
        let name: any = xx;
        let data: any = input.value;
        // let id = (idx + 1);
        // update object kpiamp โดยส่งค่า index(idx) ไปด้วย
        this.param[idx] = { name, data };
        console.log(param_xx);

        if (param_xx = "pcu") {
            this.showPcu(input.value);
            console.log(input.value);
        }
        // console.log(this.param);
    }



    showParams() {

        this.fieldDatas = [null];
        this.tableDatas = [null];
        let i: any;
        let x: any;
        let xx: any;
        this.open = false;

        for (i = 0; i < this.param.length; i++) {
            x = this.param[i].name;
            xx = this.param[i].data;
            console.log(xx);

            this.param_x[i] = xx;
        }

        console.log(this.param_x);
        console.log(this.sql);

        this.params = this.param_x;
        //console.log("send params:" + this.params);
        // this.params = ['2004-10-01', '2017-10-31', 'I10'];
        this.Dataviews = [];
        this.viewreportService.viewReport(this.sql, this.params)
            .then((res: any) => {
                const datas = [];
                if (res.ok) {

                    const xx = res.rows[0].length
                    const _datafield = [];

                    console.log(res.rows);
                    console.log(res.rows);

                    if (res.rows[1][0] != null) {
                        this.Dataviews = res.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                        this.AllMenu = res.rows[1];
                        console.log(this.Dataviews);

                    } else {
                        this.Dataviews = res.rows[0][2]; // ตอนรับ ก็ต้องมารับค่า rows แบบ ตัวแปร 1 แยกออกหลายจุด
                        this.AllMenu = res.rows[1][2];
                        console.log(this.Dataviews);
                    }

                    _.forEach(this.AllMenu, (v, k) => {  // ดึงข้อมูล colums ไปเก็บไว้ที่ _datafield
                        _datafield.push(v.name);
                    })
                    console.log(res.rows);
                    // console.log(this.AllMenu);

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
