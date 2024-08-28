import { CartType, CategoryType, OrderType, ProductType } from "../types/types";

export class Product {
    private constructor(private readonly product: Partial<ProductType>) {}

    public static create(product: Partial<ProductType>): Product {
        return new Product(product)
    }

    public getId(): string | undefined { return this.product.id }

    public getName(): string | undefined { return this.product.name }

    public getCategory(): CategoryType | undefined { return this.product.category }

    public getPrice(): number | undefined { return this.product.price }

    public getStock(): number | undefined { return this.product.stock }

    public getOrders(): OrderType[] | undefined { return this.product.orders }
    
    public updateStock(amount: number): void { // Valores positivos aumentam o estoque e negativos diminuem o estoque
        const currentStock = this.getStock?.() ?? 0
        this.update({stock: currentStock + amount})
    }

    public update(fields: Partial<ProductType>): void {
        Object.assign(this.product, fields)
    }

}