import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { CartService } from '../cartservice';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    constructor(private routerObj: Router, private cartRef: CartService) { 
        this.product={
            brand:'',
            price:'',
            image:'',
            name:''
        }
    }
    @Input() product;
    showbutton
    ngOnInit() {
        if(this.routerObj.url == "/cart"){
            this.showbutton = 0
        }else{
            this.showbutton = 1
        }
    }
    addToCart() {
        if (localStorage.getItem("navbarValue") == null) {
            this.routerObj.navigate(["login"]);
        } else {
            console.log("product added to cart", this.product);
            this.cartRef.cart.push(this.product);
        }
    }
    checkout() {
        if (localStorage.getItem("navbarValue") == null) {
            this.routerObj.navigate(["login"]);
        } else {
            this.routerObj.navigate(["cart"]);
        }
    }
}