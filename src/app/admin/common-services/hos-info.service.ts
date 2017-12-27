import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HosInfoService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: Http
  ) { }

  getAllHosInfo() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/setup`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }





}