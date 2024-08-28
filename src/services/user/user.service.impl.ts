import { UserType, OrderType } from "../../types/types";
import { UserService } from "./user.service";

export class UserServiceImpl implements UserService {
    createUser(user: UserType): Promise<UserType | null> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, updates: Partial<UserType>): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    orderProduct(userId: number, productId: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    viewOrders(): Promise<OrderType[]> {
        throw new Error("Method not implemented.");
    }
    
}