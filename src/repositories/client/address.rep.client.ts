import { AddressType } from "../../types/types";
import { AddressRepositoty } from "../address.repository/address.repository";

export class AddressClient implements AddressRepositoty {
  saveAddress(address: AddressType): Promise<AddressType | Error> {
    throw new Error("Method not implemented.");
  }
  updateAddress(fields: Partial<AddressType>): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAddress(addressId: number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  findAddress(addressId: number): Promise<AddressType> {
    throw new Error("Method not implemented.");
  }
  listAddresses(addresses: AddressType[]): Promise<AddressType[]> {
    throw new Error("Method not implemented.");
  }
}
