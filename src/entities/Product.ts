import { CategoryType, OrderType, ProductType } from "../types/types";

export class Product {
  private constructor(private readonly product: Partial<ProductType>) {}

  public static create(product: Partial<ProductType>): Product {
    return new Product(product);
  }

  public static with(
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    categories: CategoryType[]
  ) {
    return new Product({ id, name, description, price, stock, categories });
  }

  public getId(): string | undefined {
    return this.product.id;
  }

  public getName(): string | undefined {
    return this.product.name;
  }

  public getDescription(): string | undefined {
    return this.product.description;
  }

  public getCategories(): CategoryType[] | undefined {
    return this.product.categories;
  }

  public getPrice(): number | undefined {
    return this.product.price;
  }

  public getStock(): number | undefined {
    return this.product.stock;
  }

  public getOrders(): OrderType[] | undefined {
    return this.product.orders;
  }

  public updateStock(amount: number): void {
    // Valores positivos aumentam o estoque e negativos diminuem o estoque
    const currentStock = this.getStock?.() ?? 0;
    this.update({ stock: currentStock + amount });
  }

  public update(fields: Partial<ProductType>): void {
    Object.assign(this.product, fields);
  }
}
