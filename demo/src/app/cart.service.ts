import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart); // ✅ BehaviorSubject for reactivity

  // ✅ Observable for cart updates
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.count++;
    } else {
      product.count = 1;
      this.cart.push(product);
    }

    this.cartSubject.next([...this.cart]); // ✅ Notify subscribers
    console.log('Cart Updated:', this.cart);
  }

  getCartProducts() {
    return this.cart$; // ✅ Return observable
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.cartSubject.next([...this.cart]); // ✅ Notify subscribers
  }

  getCartCount() {
    return this.cart.reduce((total, product) => total + product.count, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price * product.count, 0);
  }
}
