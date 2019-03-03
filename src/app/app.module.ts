import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProductComponent } from './createProduct/createProduct.component';
import { CommonService } from './commonservice';
import { HomeComponent } from './home/home.component';
import { ImageDirective } from './image.directive';
import { DiscountPipe } from './discount.pipe';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cartservice';
import { CartGaurd } from './cartgaurd';
import { HighlightDirective } from './highlight.directive';

let routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createProduct', component: CreateProductComponent },
  { path: 'cart', component: CartComponent, canActivate: [CartGaurd] },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent,
    ProductComponent, NavbarComponent, CreateProductComponent, HomeComponent, ImageDirective,
    DiscountPipe, CartComponent, HighlightDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [CommonService, CartService, CartGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
