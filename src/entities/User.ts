import { AddressType, OrderType, UserType } from "../types/types";

export class User {
  private constructor(private readonly user: Partial<UserType>) {}

  public static create(user: Partial<UserType>): User {
    return new User(user);
  }

  public getName(): string | undefined {
    return this.user.name;
  }

  public getEmail(): string | undefined {
    return this.user.email;
  }

  public getPassword(): string | undefined {
    return this.user.password;
  }

  public getId(): number | undefined {
    return this.user.id;
  }

  public getCPF(): string | undefined {
    return this.user.cpf;
  }

  public getAddresses(): AddressType[] | undefined {
    return this.user.addresses;
  }

  public getOrders(): OrderType[] | undefined {
    return this.user.orders;
  }

  public getUpdatedDate(): Date | undefined {
    return this.user.updatedAt;
  }

  public update(fields: Partial<UserType>) {
    Object.assign(this.user, fields);
  }
}
