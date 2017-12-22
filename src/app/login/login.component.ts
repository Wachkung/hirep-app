import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Encrypt } from '../common-services/encrypt';
import { Router } from "@angular/router";
import { UserService } from '../common-services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService, Encrypt],
    styles: ['.error {color:red;}'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    //  member: any[] = [];
    errorMessage: string;
    status: any[] = [];
    users: any[] = [];
    date: Date = new Date();
    mode = 'Promise';
    username: any;
    password: any;
    adm_status: any;

    constructor(
        private router: Router,
        private userService: UserService,
        private encryptProvider: Encrypt
    ) { }

    ngOnInit() {
    }
    Login() {
        this.users = [];
        this.userService.Login(this.username, this.password)
            .then((result: any) => {
                if (result.ok) {
                    this.users = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
                    localStorage.setItem('login', result.rows); // เก็บค่า Token ไว้ที่เครื่อง Client ไว้
                    // console.log(this.users);
                    this.router.navigate(['admin']);
                }
            }).catch(error => {
                console.log(error);
            })
    }

}
