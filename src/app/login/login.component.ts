import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../commonservice';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private http: HttpClient, private routeObj: Router, private ref: CommonService) { }
    user = {
        email:'',
        password:''
    }
    msg
    login() {
        let url = "https://learningmeanwithashu.herokuapp.com/api/login";
        console.log("login details:", this.user);
        this.http.post(url, this.user).subscribe((data) => {
            console.log(data);
            if (data["token"] != null) {
                // this.ref.navbarValue = "Hi "+ data["name"];
                localStorage.setItem("navbarValue", "Hi "+ data["name"]);
                this.routeObj.navigate(["home"]);
            } else {
                this.msg = data["message"];
            }
        }, (error) => {
            console.log(error);
        });

    }
}