import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CartGaurd implements CanActivate {
    constructor(private routerObj: Router){}
    canActivate() {
        if (localStorage.getItem("navbarValue")) {
            return true;
        } else {
            this.routerObj.navigate(["login"]);
            return false;
        }
    }
}