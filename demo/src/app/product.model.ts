export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  price: number;
  count: number;  // Add this field to track product quantity
}
