import { ProductType } from "../types/types";

export interface ProductService {
  buyProduct(): Promise<ProductType | Error>;
  addProductOnStock(): Promise<Boolean>;
  updateProduct(): Promise<Boolean>;
  listProductsByCategory(): Promise<ProductType[]>;
}
