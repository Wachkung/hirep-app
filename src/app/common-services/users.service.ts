import { Component, Injectable, Inject } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Encrypt } from '../common-services/encrypt';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
    // URL to web API
    constructor(
        @Inject('API_URL') private url: string,
        private authHttp: Http) { }

    doLogin(encryptText) {
        return new Promise((resolve, reject) => {
            let url = `${this.url}/users`;
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
    // อันนี้แบบ post
    Login(username, password) {
        return new Promise((resolve, reject) => {
            // แนบตัวแปบไปกับ service
            this.authHttp.post(`${this.url}/users/login`, { username: username, password: password })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

}
