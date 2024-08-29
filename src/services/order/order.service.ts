import { OrderType } from "../../types/types";

export interface OrderService {
  create(): Promise<OrderType>;
  verifyOrder(password: string, email: string, userId: number, orderId: number): Promise<Boolean>
  update(): Promise<Boolean>;
  delete(): Promise<Boolean>;
  list(): Promise<OrderType[]>;
}
