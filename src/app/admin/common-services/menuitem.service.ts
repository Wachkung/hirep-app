import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuitemService {

  constructor(
    @Inject('API_URL')
    private url: string,
    private Http: Http
  ) { }
 
   getAllMenuitem() {
    return new Promise((resolve, reject) => {
     //route ดูที่ API
      this.Http.get(`${this.url}/items`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }

  addMenuItem(varmenu_id:any,varitem_name:any,varcomment:any,varitem_status:any) {
    return new Promise((resolve, reject) => {
      this.Http.post(`${this.url}/items`,{
        menu_id :varmenu_id,
        item_name:varitem_name,
        comment:varcomment,
        item_status:varitem_status
      
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    })
  }
}
