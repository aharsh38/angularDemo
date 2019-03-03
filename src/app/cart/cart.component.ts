import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartRef: CartService, private routeObj: Router) { }
  cartProducts
  payStatus
  
  ngOnInit() {
    this.cartProducts = this.cartRef.cart;
  }
  payment(){
    this.payStatus = "Payment Successful"
  }
}
