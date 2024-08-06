import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface cart{
  image: string;
  name: string;
  price: number;
  quantity:number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  item: cart[] = [];
  cart:any;

  constructor(private cartService: CartService, private path: Router) {
    const storedArray = localStorage.getItem('cartItems');
    if(storedArray){
      this.cart = JSON.parse(storedArray);
    }
  }

  ngOnInit(){
    this.item = this.cartService.getItems();
  }

  remove(item: any){
    this.cart= this.cart.filter((i:any) => i.id !== item.id);
    // this.item = this.cart.getItems();
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  getTotal() {
    return this.cart.reduce((total:number, item:any) => total + item.price*item.quantity, 0);
  }

  goPay() {
    this.path.navigate(['/order']);
  }

  value: number = 1;
  total: number = 1;
  

  increaseValue(item: any): void {
    this.cart.forEach((i: any) => {
      if (i.name === item.name) {
        i.quantity++;
      }
    });
    this.calculateTotal();
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  decreaseValue(item: cart) {
    if (item.quantity > 1) {
      this.cart.forEach((i: any) => {
        if (i.name === item.name) {
          i.quantity--;
        }
      });
      this.calculateTotal();
      localStorage.setItem('cartItems', JSON.stringify(this.cart));
    }
  }


  calculateTotal(){
    this.total = this.total*this.value
  }
}
