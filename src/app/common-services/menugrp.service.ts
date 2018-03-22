import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuGrpService {

    constructor(
        @Inject('API_URL') private url: string,
        private http: Http
    ) { }
    getMenuGrp() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/menu`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    getItemAll() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/items`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    getMenuItem(menu_id) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/items/${menu_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }



    getSubItem(item_id) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}/subitems/item/${item_id}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

}
