import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layoutadm',
    templateUrl: './layoutadm.component.html',
    styleUrls: ['./layoutadm.component.scss']
})
export class LayoutadmComponent implements OnInit {
    user: any[] = [];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.logLogin()
    }

    logLogin() {
        if (localStorage.login != null) {
            console.log('login Success!');
            this.user = localStorage.token;
            // // this.user = rows.token; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
            console.log(this.user);

        } else {
            this.router.navigate(['/hirep/home']); // ส่ง Routes ไป client/home
            // console.log('No Token Success!');
        }

    }

    logLoOut() {
        console.log('logout Success!');
        localStorage.removeItem('token');
        this.router.navigate(['/hirep/home']); // ส่ง Routes ไป client/home

    }

}
