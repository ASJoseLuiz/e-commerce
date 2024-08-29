import { AddressType } from "../../types/types";

export interface AddressRepositoty {
  saveAddress(address: AddressType): Promise<AddressType | Error>;
  updateAddress(fields: Partial<AddressType>): Promise<Boolean>;
  deleteAddress(addressId: number): Promise<Boolean>;
  findAddress(addressId: number): Promise<AddressType>;
  listAddresses(addresses: AddressType[]): Promise<AddressType[]>;
}
