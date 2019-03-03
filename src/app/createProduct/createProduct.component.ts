import { Component, Input } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-createproduct',
    templateUrl: './createProduct.component.html',
    styleUrls: ['./createProduct.component.css']
})
export class CreateProductComponent {
    constructor(private http: HttpClient, private routerObj: Router) { }
    product = {
        brand: '',
        price: '',
        image: '',
        name: ''
    }
    submit() {
        let url = "https://learningmeanwithashu.herokuapp.com/api/createproduct";
        console.log(this.product);
        this.http.post(url, this.product).subscribe((data) => {
            console.log(data);
            this.routerObj.navigate(["home"]);

        }, (error) => {
            console.log(error);
        })
    }
}