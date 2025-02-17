import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { CartService } from '../cart.service';  // Import CartService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]
})
export class DashboardComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Comfortable Sneakers',
      description: 'Perfect for everyday use.',
      image: 'assets/images/img1.jpg',
      link: '/product/1',
      price: 59.99,
      count: 1
    },
    {
      id: 2,
      name: 'Running Shoes',
      description: 'Boost your performance.',
      image: 'assets/images/img2.jpg',
      link: '/product/2',
      price: 79.99,
      count: 1
    },
    {
      id: 3,
      name: 'Leather Boots',
      description: 'Durable and stylish.',
      image: 'assets/images/img3.jpg',
      link: '/product/3',
      price: 99.99,
      count: 1
    },
    {
      id: 4,
      name: 'Casual Loafers',
      description: 'Perfect for office and casual outings.',
      image: 'assets/images/img4.jpg',
      link: '/product/4',
      price: 49.99,
      count: 1
    },
    {
      id: 5,
      name: 'Sporty Sandals',
      description: 'For your outdoor adventures.',
      image: 'assets/images/img5.jpg',
      link: '/product/5',
      price: 39.99,
      count: 1
    },
    {
      id: 6,
      name: 'Winter Boots',
      description: 'Keep your feet warm and stylish.',
      image: 'assets/images/img1.jpg',
      link: '/product/6',
      price: 119.99,
      count: 1
    },
    {
      id: 7,
      name: 'Slip-On Sneakers',
      description: 'Easy to wear, great for casual outings.',
      image: 'assets/images/img2.jpg',
      link: '/product/7',
      price: 69.99,
      count: 1
    },
    {
      id: 8,
      name: 'Formal Shoes',
      description: 'Perfect for professional and formal occasions.',
      image: 'assets/images/img3.jpg',
      link: '/product/8',
      price: 129.99,
      count: 1
    },
    {
      id: 9,
      name: 'Outdoor Hiking Boots',
      description: 'For the adventurous spirit.',
      image: 'assets/images/img4.jpg',
      link: '/product/9',
      price: 89.99,
      count: 1
    },
    {
      id: 11,
      name: 'Beach Flip-Flops',
      description: 'Perfect for those summer beach days.',
      image: 'assets/images/img5.jpg',
      link: '/product/10',
      price: 19.99,
      count: 1
    },
    {
      id: 12,
      name: 'Beach Flip-Flops',
      description: 'Perfect for those summer beach days.',
      image: 'assets/images/img5.jpg',
      link: '/product/10',
      price: 19.99,
      count: 1
    },
    {
      id: 13,
      name: 'Beach Flip-Flops',
      description: 'Perfect for those summer beach days.',
      image: 'assets/images/img5.jpg',
      link: '/product/10',
      price: 19.99,
      count: 1
    }
  ];

  constructor(private cartService: CartService) {}

  // Method to add product to cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(`${product.name} added to cart!`);
  }

  // Get cart count from CartService
  get cartCount() {
    return this.cartService.getCartCount();  // Use CartService to get the cart count
  }
}
