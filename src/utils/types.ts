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

export interface CredentialsType {
  email: string;
  password: string;
}

export interface LoginUserType extends CredentialsType {
  remember: boolean;
}

export interface RegisterUserType extends CredentialsType {
  username: string;
}

export interface LoginCustomerType {
  tirt: string | undefined;
  name: string;
}
