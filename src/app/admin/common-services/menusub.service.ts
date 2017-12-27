import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuSubService {
    constructor(
        @Inject('API_URL')
        private url: string,
        private http: Http
    ) { }

    getAllMenuSub() {
        return new Promise((resolve, reject) => {
            // route ดูที่ API
            this.http.get(`${this.url}/subitems`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    addMenuSub(
        item_id: any,
        sub_item_name: any,
        query_sql: any,
        query_params: any,
        template: any,
        comment: any,
        sub_item_status: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/subitems`, {
                item_id: item_id,
                sub_item_name: sub_item_name,
                query_sql: query_sql,
                query_params: query_params,
                template: template,
                comment: comment,
                sub_item_status: sub_item_status

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateMenuSub(
        sub_item_id: any,
        item_id: any,
        sub_item_name: any,
        query_sql: any,
        query_params: any,
        template: any,
        comment: any,
        sub_item_status: any
    ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/subitems`, {
                sub_item_id: sub_item_id,
                item_id: item_id,
                sub_item_name: sub_item_name,
                query_sql: query_sql,
                query_params: query_params,
                template: template,
                comment: comment,
                sub_item_status: sub_item_status

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    remove(sub_item_id: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/subitems/del`, { sub_item_id: sub_item_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
}
