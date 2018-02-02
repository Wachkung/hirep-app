import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HirepService } from '../common-services/hirep.service';
import * as CryptoJS from 'crypto-js';


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
    date: Date = new Date();
    mode = 'Promise';

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
                if (result.ok) {
                    this.revier = result.rows[0]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    this.reviermenu = result.rows[1]; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    // console.log(this.revier);
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

}
