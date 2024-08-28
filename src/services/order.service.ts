import { OrderType } from "../types/types";

export interface OrderService {
  create(): Promise<Boolean>;
  update(): Promise<Boolean>;
  delete(): Promise<Boolean>;
  list(): Promise<OrderType[]>;
}
