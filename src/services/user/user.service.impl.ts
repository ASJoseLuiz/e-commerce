import { UserType, OrderType, ProductType, AddressType, PaymentType } from "../../types/types";
import { UserService } from "./user.service";

export class UserServiceImpl implements UserService {
    
    public async login(user: UserType): Promise<UserType | null> {
        throw new Error("Method not implemented.");
    }

    public async resetPassword(id: number, updates: Partial<UserType>): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    public async authentication(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    public async PaymentMethod(cpf: string, payType: PaymentType, address: AddressType): Promise<PaymentType[]> {
        throw new Error("Method not implemented.");
    }

    public async viewOrders(): Promise<OrderType[]> {
        throw new Error("Method not implemented.");
    }

    public async viewCart(): Promise<ProductType[]> {
        throw new Error("Method not implemented.");
    }

    public async makeOrder(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    public async deleteProductOnCart(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    public async clearCart(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    public async putProductOnCart(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}