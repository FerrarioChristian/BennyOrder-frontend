import React from "react";

export interface NewProductType {
  name: string;
  price: string;
  description: string;
  available: boolean;
}

export interface ProductType extends NewProductType {
  id: number;
  hiddenEdit?: boolean;
}

export interface ProductCountType extends ProductType {
  count: number;
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

export interface AvailabilityType {
  type?: string;
  availability?: number | boolean;
  hidden?: boolean;
  isEdit?: boolean;
  setNewAvailability?: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardActionsType {
  submit?: (e: React.SyntheticEvent) => void;
  cancel?: () => void;
  deletes?: (e: React.SyntheticEvent) => void;
}

export type TableType = {
  id: number;
  serial: string;
  name: string;
  seats: number;
  availability: number | boolean;
  created_at?: string;
};

export interface NewTableType extends Omit<TableType, "id"> {}

export interface NewOrderType {
  product_id: number;
  notes: string;
}

export interface OrderType {
  id: number;
  notes: string;
  product: ProductType;
  isCompleted: number;
  entries?: number;
}
