import { OrderType } from "../../types/types";

export interface OrderRepository {
  saveOrder(order: OrderType): Promise<OrderType | Error>;
  updateOrder(fields: Partial<OrderType>): Promise<Boolean>;
  deleteOrder(orderId: number, userId: number): Promise<Boolean>;
  listOrderOfUser(userId: number): Promise<OrderType[]>;
}
