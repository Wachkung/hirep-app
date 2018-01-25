import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OpvisitService {

  constructor(
      @Inject('API_URL')
  private url: string,
  private http: Http) { }
   getAllOpVisit() {
    return new Promise((resolve, reject) => {
        // route ดูที่ API
        this.http.get(`${this.url}/sub_id/opd`)
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            })
    })
}

 
}
   
 