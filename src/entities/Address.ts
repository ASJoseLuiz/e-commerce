import { AddressType, UserType } from "../types/types";

export class Address {
  private constructor(private readonly address: AddressType) {}

  public create(address: AddressType) {
    return new Address(address);
  }

  public getUser(): UserType {
    return this.address.user;
  }

  public getCountry(): string {
    return this.address.country;
  }

  public getState(): string {
    return this.address.state;
  }

  public getCity(): number {
    return this.address.id;
  }

  public getNum(): number {
    return this.address.num;
  }

  public getNeighborhood(): string {
    return this.address.neighborhood;
  }

  public getCEP(): string {
    return this.address.cep;
  }

  public listAddresses(addresses: AddressType[]): AddressType[] {
    return addresses.map((address) => {
      return {
        id: address.id,
        cep: address.cep,
        country: address.country,
        state: address.state,
        city: address.city,
        neighborhood: address.neighborhood,
        num: address.num,
        user: address.user,
      };
    });
  }
}
