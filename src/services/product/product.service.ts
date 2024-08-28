import { CartType, ProductType } from "../../types/types";

export interface ProductService {
  buyProduct(amount: number, productId: string): Promise<ProductType | Error>;
  updateProductOnStock(amount: number): Promise<Boolean> // Ao devolver produtos (+ amount), ao fazer pedido de produtos (- amount)
  updateProduct(fields: Partial<ProductType>): Promise<Boolean>;
  listProductsByCategory(categoty: CartType): Promise<ProductType[]>;
}
