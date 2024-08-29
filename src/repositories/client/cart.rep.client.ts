import { CartType } from "../../types/types";
import { CartRepository } from "../cart.repository/cart.repository";

export class CartClient implements CartRepository {
  saveCart(cart: CartType): Promise<CartType | Error> {
    throw new Error("Method not implemented.");
  }
  updateCart(fields: Partial<CartType>): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  findCartByUserId(userId: number, cartId: string): Promise<CartType> {
    throw new Error("Method not implemented.");
  }
}
