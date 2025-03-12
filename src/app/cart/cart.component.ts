import { Component, inject, OnInit } from '@angular/core';
import { Writer } from '../app.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WritersCrudListComponent } from "../book/writers-crud-list/writers-crud-list.component";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, WritersCrudListComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartServeice = inject(CartService);
item: Writer | undefined;
cartService: any;
trackById(index: number, item: any) {
  return item.id;
}
  addToCart(writer: Writer) {
    this.cartService.addToCart(writer);
  }
  deleteFromCart(item: Writer) {
    this.cartService.deleteFromCart(item);
  }
}
// implements OnInit {
//   cartItems: Writer[] = [];
//   totalPrice: number = 0;
//   quantity: number = 1;
//   constructor(private router: Router) {}

//   private saveCart() {
//     localStorage.setItem('cart', JSON.stringify(this.cartItems));
//   }

//   private loadCart() {
//     this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
//   }

//   addToCart(writer: Writer) {
//     const item = this.cartItems.find((p) => p.id === writer.id);
//     if (item) {
//       item.quantity += 1;
//     } else {
//       this.cartItems.push({ ...writer, quantity: 1 });
//     }
//     this.saveCart();
//     this.calculateTotalPrice();
//   }

//   getCartItems(): Writer[] {
//     return this.cartItems;
//   }

//   removeItem(id: number) {
//     this.cartItems = this.cartItems.filter((cartItems) => cartItems.id !== id);
//     this.saveCart();
//     this.calculateTotalPrice();
//   }

//   clearCart() {
//     this.cartItems = [];
//     this.saveCart();
//     this.calculateTotalPrice();
//   }

//   calculateTotalPrice() {
//     this.totalPrice = this.cartItems.reduce(
//       (acc, curr) => acc + curr.price * curr.quantity,
//       0
//     );
//   }

//   ngOnInit(): void {
//     this.loadCart();
//     this.calculateTotalPrice();
//   }
// }
