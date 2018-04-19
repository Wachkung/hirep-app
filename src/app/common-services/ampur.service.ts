import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AmpurService {

    constructor(
        @Inject('API_URL') private url: string,
        private authHttp: Http) { }

    selectAmpur() {
        return new Promise((resolve, reject) => {
            // แนบตัวแปบไปกับ service
            this.authHttp.get(`${this.url}/ampur`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

}