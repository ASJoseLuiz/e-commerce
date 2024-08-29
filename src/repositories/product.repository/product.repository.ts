import { Product } from "../../entities/Product";
import { ProductType } from "../../types/types";

export interface ProductRepository {
  saveProduct(product: ProductType): Promise<Product | Error>;
  updateProduct(fields: Partial<Product>): Promise<Boolean>;
  deleteProduct(productId: string): Promise<Boolean>;
  listProducts(): Promise<Product[]>;
  findProduct(productId: string): Promise<Product>;
}
