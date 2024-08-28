import { CartType, OrderType, PaymentType, StatusType, UserType } from "../types/types";

export class Order {
    private constructor(private readonly order: Partial<OrderType>) {}

    public static create(order: Partial<OrderType>): Order {
        return new Order(order)
    }

    public getId(): number | undefined { return this.order.id }

    public getName(): string | undefined { return this.order.name }

    public getDescription(): string | undefined { return this.order.description }

    public getPaymentMethod(): PaymentType | undefined { return this.order.payment }

    public getOrderPrice(): number | undefined { return this.order.price }

    public getStatus(): StatusType | undefined { return this.order.status }

    public getUser(): UserType | undefined { return this.order.user }

    public update(fields: Partial<OrderType>) {
        Object.assign(this.order, fields)
    }


}