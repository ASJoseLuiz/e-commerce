import { OrderType } from "../../types/types";
import { OrderRepository } from "../order.repository/order.repository";

export class OrderClient implements OrderRepository {
  saveOrder(order: OrderType): Promise<OrderType | Error> {
    throw new Error("Method not implemented.");
  }
  updateOrder(fields: Partial<OrderType>): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  deleteOrder(orderId: number, userId: number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  listOrderOfUser(userId: number): Promise<OrderType[]> {
    throw new Error("Method not implemented.");
  }
}
