import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

    constructor(
        @Inject('API_URL')
        private url: string,
        private http: Http
    ) { }

    getAllMenu() {
        return new Promise((resolve, reject) => {
            // route ดูที่ API
            this.http.get(`${this.url}/menu`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    addMenu(menu_name: any, description: any, status: any, rout: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/menu`, {
                menu_name: menu_name,
                description: description,
                rout: rout,
                status: status

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateMenu(menu_id: any, menu_name: any, description: any, status: any, rout: any) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/menu`, {
                menu_id: menu_id,
                menu_name: menu_name,
                description: description,
                status: status,
                rout: rout
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    remove(menu_id: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/menu/del`, { menu_id: menu_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
}
