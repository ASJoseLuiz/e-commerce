import { CartType } from "../../types/types";

export interface CartRepository {
  saveCart(cart: CartType): Promise<CartType | Error>;
  updateCart(fields: Partial<CartType>): Promise<Boolean>;
  findCartByUserId(userId: number, cartId: string): Promise<CartType>;
}
