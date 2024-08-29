import { User } from "../../entities/User";

export interface UserRepository {
  saveUser(user: User): Promise<Boolean>;
  updateUser(fields: Partial<User>): Promise<Boolean>;
  deleteUser(id: number): Promise<Boolean>;
  listUsers(): Promise<User[]>;
  findUser(id: number): Promise<User>;
}
