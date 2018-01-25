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


  addHosinfo(varheader:any,vardata:any,varcomment) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/setup`,{
        header :varheader,
        data:vardata,
        comment:varcomment
        
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }


  updateHosinfo(var_id:any,varheader:any,vardata:any,varcomment) {
    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/setup`,{
        id :var_id,
        header:varheader,
        data:vardata,
        comment:varcomment
        
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }
  remove(var_id:any) {
    return new Promise((resolve, reject) => {
      
      this.http.post(`${this.url}/setup/del`,{id:var_id})


        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }



}