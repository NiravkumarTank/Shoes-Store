import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule]
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: Product[] = [];
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.getCartProducts().subscribe((products) => {
      this.cartProducts = products;
    });
  }

  get cartCount() {
    return this.cartProducts.reduce((total, product) => total + product.count, 0);
  }

  get totalPrice() {
    return this.cartProducts.reduce((total, product) => total + (product.price * product.count), 0);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
