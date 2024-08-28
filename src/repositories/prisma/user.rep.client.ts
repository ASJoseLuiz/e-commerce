import { client } from "../../config/db";
import { User } from "../../entities/User";
import { UserRepository } from "../user.repositories";

export class UserClient implements UserRepository {
  public async saveUser(user: User): Promise<Boolean> {
    if (
      !user.getName() ||
      !user.getEmail() ||
      !user.getCPF() ||
      !user.getPassword()
    ) {
      throw new Error("Faltando campos obrigatórios");
    }

    const newUser = await client.user.create({
      data: {
        name: user.getName() as string,
        email: user.getEmail() as string,
        password: user.getPassword() as string,
        cpf: user.getCPF() as string,
      },
    });

    return newUser ? true : false;
  }

  public async updateUser(fields: Partial<User>): Promise<Boolean> {
    const userId = fields.getId?.();
    if (!userId) throw new Error("Necessita-se de um ID para atualização");

    const existUser = await client.user.findUnique({
      where: { id: userId },
      include: { addresses: true, orders: true },
    });
    if (!existUser) throw new Error("Usuário não encontrado");

    const updatedUser = await client.user.update({
      where: { id: userId },
      data: {
        name: fields.getName?.() ?? existUser.name,
        email: fields.getEmail?.() ?? existUser.email,
        password: fields.getPassword?.() ?? existUser.password,
        cpf: fields.getCPF?.() ?? existUser.cpf,
        updatedAt: fields.getUpdatedDate?.() ?? existUser.updatedAt,
      },
    });

    return updatedUser ? true : false;
  }

  public async deleteUser(id: number): Promise<Boolean> {
    const existUser = await client.user.findUnique({ where: { id } });
    if (!existUser) throw new Error("Usuário não existe");

    await client.user.delete({ where: { id } });
    return true;
  }

  public async listUsers(): Promise<User[]> {
    const users = await client.user.findMany();
    return users.map((u) => User.create(u));
  }

  public async findUser(id: number): Promise<User> {
    const user = await client.user.findUnique({ where: { id } });
    if (!user) throw new Error("Usuário não existe");

    return User.create(user);
  }
}
