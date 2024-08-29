import { client } from "../../config/db";
import { User } from "../../entities/User";
import { UserRepository } from "../user.repository/user.repository";

export class UserClient implements UserRepository {
  public async saveUser(user: User): Promise<Boolean> {
    try {
      if (
        !user.getName() ||
        !user.getEmail() ||
        !user.getCPF() ||
        !user.getPassword()
      ) {
        throw new Error("Faltando campos obrigatórios");
      }

      await client.user.create({
        data: {
          name: user.getName() as string,
          email: user.getEmail() as string,
          password: user.getPassword() as string,
          cpf: user.getCPF() as string,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao salvar usuário no banco de dados");
    }
  }

  public async updateUser(fields: Partial<User>): Promise<Boolean> {
    try {
      const userId = fields.getId?.();
      if (!userId) throw new Error("Necessita-se de um ID para atualização");

      const existUser = await client.user.findUnique({
        where: { id: userId },
        include: { addresses: true, orders: true },
      });
      if (!existUser) throw new Error("Usuário não encontrado");

      const updatedAddress = fields.getAddresses?.()?.map((address) => ({
        id: address.id,
        country: address.country,
        state: address.state,
        city: address.city,
        cep: address.cep,
        neighborhood: address.neighborhood,
        num: address.num,
      }));

      await client.user.update({
        where: { id: userId },
        data: {
          name: fields.getName?.() ?? existUser.name,
          email: fields.getEmail?.() ?? existUser.email,
          password: fields.getPassword?.() ?? existUser.password,
          cpf: fields.getCPF?.() ?? existUser.cpf,
          updatedAt: fields.getUpdatedDate?.() ?? existUser.updatedAt,
          addresses: updatedAddress ? { set: updatedAddress } : undefined,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao atualizar usuário no banco de dados");
    }
  }

  public async deleteUser(id: number): Promise<Boolean> {
    try {
      const existUser = await client.user.findUnique({ where: { id } });
      if (!existUser) throw new Error("Usuário não existe");

      await client.user.delete({ where: { id } });
      return true;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao deletar usuário no banco de dados");
    }
  }

  public async listUsers(): Promise<User[]> {
    try {
      const users = await client.user.findMany();
      return users.map((u) => User.create(u));
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao listar usuário no banco de dados");
    }
  }

  public async findUser(id: number): Promise<User> {
    try {
      const user = await client.user.findUnique({ where: { id } });
      if (!user) throw new Error("Usuário não existe");

      return User.create(user);
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao encontrar usuário no banco de dados");
    }
  }
}
