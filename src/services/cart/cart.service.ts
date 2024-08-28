import { CartType, OrderType, ProductType } from "../../types/types";

// O método activateCart é importante, pois servirá para a autenticação de um pedido
// Dessa forma, não há como um pedido ser feito se um carrinho não está ativado (ou seja, não possui produtos)

export interface CartUseInterface {
  activateCart(): Promise<Boolean>; // Ativar um carrinho, ou seja, por um produto no carrinho 
  isEmpty(): Promise<Boolean>;
  clearCart(): Promise<Boolean>;
  updateProductOnCart(): Promise<Boolean>;
  showProductsOnCart(): Promise<ProductType[]>;
}
