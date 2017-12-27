import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(
        @Inject('API_URL')
        private url: string,
        private http: Http
    ) { }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            // route ดูที่ API
            this.http.get(`${this.url}/users`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    addUsers(fullname: any, username: any, password: any, is_accept: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/users`, {
                fullname: fullname,
                username: username,
                password: password,
                is_accept: is_accept

            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }

    updateUsers(id_user: any, fullname: any, username: any, password: any, is_accept: any) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.url}/users`, {
                id_user: id_user,
                fullname: fullname,
                username: username,
                password: password,
                is_accept: is_accept
            })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
    remove(id_user: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.url}/users/del`, { id_user: id_user })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                })
        })
    }
}
