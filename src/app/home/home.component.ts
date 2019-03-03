import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../commonservice';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private http: HttpClient, private routeObj: Router, private ref: CommonService) {
        let url = "https://learningmeanwithashu.herokuapp.com/api/allproducts";
        this.http.get(url).subscribe((data) => {
            console.log(data);
            this.products = data["data"];
        }, (error) => {
            console.log(error);
        });
    }
    products
}
