import { Component } from "@angular/core";
import { CommonService } from '../commonservice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private ref: CommonService, private routeObj: Router){

    }
    value
    ngDoCheck(){
        this.value = localStorage.getItem("navbarValue");
        // this.value = this.ref.navbarValue;
    }
    logout(){
        // this.ref.navbarValue = null;
        localStorage.clear();
        this.routeObj.navigate(["login"]);
    }  
}