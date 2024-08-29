import { client } from "../../config/db";
import { Product } from "../../entities/Product";
import { CategoryType, ProductType } from "../../types/types";
import { ProductRepository } from "../product.repository/product.repository";

export class ProductClient implements ProductRepository {
  public async saveProduct(product: ProductType): Promise<Product> {
    try {
      const verifyExistProduct = await client.product.findUnique({
        where: { id: product.id },
      });

      if (verifyExistProduct) throw new Error("Produto Já Existente");

      const newProduct = await client.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
          categories: {
            connect: product.categories.map((categories) => ({
              id: categories.id,
            })),
          },
        },
        include: {
          categories: true,
        },
      });
      return Product.create({
        id: newProduct.id,
        name: newProduct.name,
        categories: newProduct.categories as CategoryType[],
        description: newProduct.description,
        price: newProduct.price,
        stock: newProduct.stock,
      });
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao salvar o produto no banco de dados");
    }
  }

  public async updateProduct(fields: Partial<Product>): Promise<Boolean> {
    try {
      const productId = fields.getId?.();
      if (!productId)
        throw new Error("Para atualizar o produto necessita-se do ID");

      const product = await client.product.findUnique({
        where: { id: productId },
        include: { categories: true },
      });
      if (!product) throw new Error("Produto não encontrado");

      const updatedCategories = fields
        .getCategories?.()
        ?.map((category) => ({ id: category.id, name: category.name }));

      await client.product.update({
        where: { id: productId },
        data: {
          name: fields.getId?.() ?? product?.name,
          description: fields.getDescription?.() ?? product.description,
          price: fields.getPrice?.() ?? product.price,
          stock: fields.getStock?.() ?? product.stock,
          categories: updatedCategories
            ? { set: updatedCategories }
            : undefined,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao atualizar o produto no banco de dados");
    }
  }

  public async deleteProduct(productId: string): Promise<Boolean> {
    try {
      await client.product.delete({ where: { id: productId } });
      return true;
    } catch (err) {
      console.log(err);
      throw new Error("Produto não existe no banco de dados");
    }
  }

  public async listProducts(): Promise<Product[]> {
    try {
      const products = await client.product.findMany({
        include: { categories: true },
      });
      return products.map((p) => {
        const { id, name, description, price, stock, categories } = p;
        return Product.with(id, name, description, price, stock, categories);
      });
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao tentar listar os produtos no banco de dados");
    }
  }

  public async findProduct(productId: string): Promise<Product> {
    try {
      const product = await client.product.findUnique({
        where: { id: productId },
      });
      if (!product) throw new Error("Produto não existe no banco de dados");

      return Product.create(product);
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao tentar encontrar o produto");
    }
  }
}
