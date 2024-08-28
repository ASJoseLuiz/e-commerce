import { AddressType, OrderType, PaymentType, ProductType, UserType } from "../../types/types";

export interface UserService {
  login(user: UserType): Promise<UserType | null>
  resetPassword(id: number, updates: Partial<UserType>): Promise<Boolean>
  authentication(): Promise<Boolean>
  PaymentMethod(cpf: string, payType: PaymentType, address: AddressType): Promise<PaymentType[]>
  viewOrders(): Promise<OrderType[]>
  viewCart(): Promise<ProductType[]>
  makeOrder(): Promise<Boolean>
  deleteProductOnCart(): Promise<Boolean>
  clearCart(): Promise<Boolean>
  putProductOnCart(): Promise<Boolean>
}
