export type AddressType = {
  id: number;
  user: UserType;
  country: string;
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
  num: number;
};

export enum StatusType {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  ACCEPTED = "ACCEPTED",
  DENIED = "DENIED",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
  SHIPPING = "SHIPPING",
}

export enum PaymentType {
  PAYPAL = "PAYPAL",
  PIX = "PIX",
  BOLETO = "BOLETO",
  CREDIT_CARD = "CREDIT_CARD",
}

export type CategoryType = {
  id: string;
  name: string;
  products: ProductType[];
};

export type OrderType = {
  id: number;
  name: string;
  description: string;
  price: number;
  status: StatusType;
  payment: PaymentType;
  user: UserType;
  carts: CartType[]
};

export type CartType = {
  id: string;
  products: ProductType[];
  user: UserType;
};

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  orders: OrderType[]
  category: CategoryType;
};

export type UserType = {
  id: number;
  cpf: string;
  name: string;
  email: string;
  password: string;
  updatedAt: Date;
  addresses: AddressType[];
  orders: OrderType[];
};

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};
