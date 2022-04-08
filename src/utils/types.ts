export interface NewProductType {
  name: string;
  price: string;
  description: string;
  remaining: number;
}

export interface ProductType extends NewProductType {
  id: number;
}

export interface OrderType {
  id: number;
  notes: string;
}
