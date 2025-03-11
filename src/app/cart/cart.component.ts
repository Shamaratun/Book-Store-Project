import { Component, OnInit } from '@angular/core';
import { Writer } from '../book/writers-crud-list/writers-crud-list.component';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  

  cartItems: Writer[] = [];
  totalPrice: number = 0;
  
  ngOnInit(): void {
    let allCarts = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = allCarts;
    this.totalPrice = this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
    
  }

}
