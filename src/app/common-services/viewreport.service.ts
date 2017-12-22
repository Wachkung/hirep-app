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
        this.authHttp.post(`${this.url}/report`, { sql: sql, paramtype : params })
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
    });
  }
  selectReport(sub_id) {
    return new Promise((resolve, reject) => {
        // แนบตัวแปบไปกับ service
        this.authHttp.get(`${this.url}/subitem/${sub_id}`)
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
    });
  }

}
