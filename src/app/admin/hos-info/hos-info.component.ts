import { Component, OnInit } from '@angular/core';
import{HosInfoService} from '../common-services/hos-info.service'

@Component({
  selector: 'app-hos-info',
  templateUrl: './hos-info.component.html',
  styleUrls: ['./hos-info.component.scss']
})
export class HosInfoComponent implements OnInit {
  allhosinfo: any = [];



  constructor(
   private hosinfoservice :HosInfoService
  ) { }

  ngOnInit() { this.showAllHosInfo();
  }
  /// fuction
  showAllHosInfo() {
    //cler ค่า
    this.allhosinfo = [];
    this.hosinfoservice.getAllHosInfo()
      .then((result: any) => {
        if (result.ok) {
          this.allhosinfo = result.rows;
          console.log(this.allhosinfo);
        } else {
          console.log(JSON.stringify(result.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      })

  }

}
