import { OrderType } from "../../types/types";

export interface OrderService {
  create(): Promise<OrderType>;
  update(): Promise<Boolean>;
  delete(): Promise<Boolean>;
  list(): Promise<OrderType[]>;
}
