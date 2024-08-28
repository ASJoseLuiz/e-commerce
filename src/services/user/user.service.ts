import { OrderType, UserType } from "../../types/types";

export interface UserService {
  createUser(user: UserType): Promise<UserType | null>;
  updateUser(id: number, updates: Partial<UserType>): Promise<Boolean>;
  deleteUser(id: number): Promise<Boolean>;
  orderProduct(userId: number, productId: string): Promise<Boolean>;
  viewOrders(): Promise<OrderType[]>;
}
