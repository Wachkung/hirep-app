import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuitemService {

    constructor(
        @Inject('API_URL')
        private url: string,
        private http: Http
    ) { }

    getAllMenuitem() {
        return new Promise((resolve, reject) => {
            // route ดูที่ API
            this.http.get(`${this.url}/items`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    addMenuItem(varmenu_id: any, varitem_name: any, varcomment: any, varitem_status: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/items`, {
                menu_id: varmenu_id,
                item_name: varitem_name,
                comment: varcomment,
                item_status: varitem_status

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateMenuitems(varitem_id: any, varmenu_id: any, varitem_name: any, varcomment: any, varitem_status: any) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/items`, {
                item_id: varitem_id,
                menu_id: varmenu_id,
                item_name: varitem_name,
                comment: varcomment,
                item_status: varitem_status
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    remove(varitem_id: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/items/del`, { item_id: varitem_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
}
