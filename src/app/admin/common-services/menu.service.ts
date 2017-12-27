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

    addMenu(varmenu_name: any, vardescription: any, varstatus: any, varrout: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/menu`, {
                menu_name: varmenu_name,
                description: vardescription,
                status: varstatus,
                rout: varrout

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateMenu(varmenu_id: any, varmenu_name: any, vardescription: any, varstatus: any, varrout: any) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/menu`, {
                menu_id: varmenu_id,
                menu_name: varmenu_name,
                description: vardescription,
                status: varstatus,
                rout: varrout
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    remove(varmenu_id: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/menu/del`, { menu_id: varmenu_id })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
}
