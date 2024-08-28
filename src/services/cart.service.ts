import { CartType, OrderType } from "../types/types";

export interface CartUseInterface {
  activateCart(): Promise<Boolean>; // Ativar um carrinho, ou seja, por um pedido no carrinho
  isEmpty(): Promise<Boolean>;
  cleanCart(): Promise<Boolean>;
  updateOrderOnCart(): Promise<OrderType>;
  showOrderOnCart(): Promise<CartType>;
}
