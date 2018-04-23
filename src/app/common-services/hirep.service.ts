import { Component, Injectable, Inject } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class HirepService {
    // URL to web API

    constructor(
        @Inject('API_URL') private url: string,
        private authHttp: Http) { }


    // รูปแบบ promise ควรเป็นแบบนี้ // เอาแบบนี้ไปก่อน เด๋วพาตั้งตัวแปล url แบบ global วันหลัง
    // เราค่อยใส่ path ต่อท้าย แบบของผมตะกี๊
    // อันนี้ service
    getToday() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/today`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getTodaytotal() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todaytotal`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getTodaytype() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todaytype`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getTodayipt() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayipt`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getRevier() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/revier`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getOpicdtm() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/opicdtm`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getEricdtm() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/ericdtm`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getDticdtm() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/dticdtm`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getIptnum() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/iptnum`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getReopuc() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/reopuc`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getReipuc() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/reipuc`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getOvervisit() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/overvisit`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getOveradmin() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/overadmin`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    // อันนี้ แบบ get
    getTypetotal(startdate, enddate) {
        return new Promise((resolve, reject) => {
            // แนบตัวแปบไปกับ service
            this.authHttp.get(`${this.url}/typetotal/${startdate}/${enddate}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    // อันนี้แบบ post
    PostTypetotal(encryptText) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/typetotal`;
            // let url = this.url + '/users/login';
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { data: encryptText };
            this.authHttp.post(url, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, () => {
                    reject('Connection failed!');
                });
        });
    }


    getBed() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/bed`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    getTodayReferOut() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayreferout`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    getTodayReferBack() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayreferback`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }


    getTodayReferSocial() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayrefersocial`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    getTodayopddead() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayopddead`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    getTodayipddead() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todayipddead`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    getTodaylrbrith() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todaylrbrith`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getTodaylrWait() {
        return new Promise((resolve, reject) => {
            this.authHttp.get(`${this.url}/todaylrwait`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }


}
