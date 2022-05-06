export interface NewProductType {
  name: string;
  price: string;
  description: string;
  available: boolean;
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

export interface TableType extends AvailabilityType {
  id: number;
  serial: string;
  name: string;
  seats: number;
  created_at: string;
}

export interface AvailabilityType {
  type: string;
  availability: 0 | 1 | 2 | boolean;
  hidden?: boolean;
}
