import { CartType, ProductType, UserType } from "../types/types";

export class Cart {
  private constructor(private readonly cart: CartType) {}

  public static create(cart: CartType) {
    return new Cart(cart);
  }

  public getId(): string {
    return this.cart.id;
  }

  public getUser(): UserType {
    return this.cart.user;
  }

  public getProducts(): ProductType[] {
    return this.cart.products;
  }

  public listProductsOnCart(): ProductType[] {
    return this.cart.products.map((product) => ({
      id: product.id,
      categories: product.categories,
      description: product.description,
      name: product.name,
      orders: product.orders,
      price: product.price,
      stock: product.stock,
    }));
  }

  public removeProductOnCart(productId: string): ProductType[] {
    this.cart.products = this.cart.products.filter(
      (product) => product.id != productId
    );
    return [...this.cart.products]; // retorna uma cópia da lista de produtos no carrinho atualizada
  }
}
