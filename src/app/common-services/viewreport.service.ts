import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewreportService {

    constructor(
        @Inject('API_URL') private url: string,
        private authHttp: Http) { }

    viewReport(sql, params) {
        return new Promise((resolve, reject) => {
            // แนบตัวแปบไปกับ service
            this.authHttp.post(`${this.url}/report`, { query_sql: sql, query_params: params })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    console.log(data);
                    // console.log(data[2]);
                }, error => {
                    reject(error);
                });
        });
    }

    selectReport(sub_id) {
        return new Promise((resolve, reject) => {
            // แนบตัวแปบไปกับ service
            this.authHttp.get(`${this.url}/subitems/${sub_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

}
