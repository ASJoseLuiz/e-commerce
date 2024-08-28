import { AddressType } from "../types/types";

export interface AddressService {
  addAddress(): Promise<AddressType | Error>;
  updateAddress(): Promise<Boolean>;
  deleteAddress(): Promise<Boolean | Error>;
  listAddresses(): Promise<AddressType[]>;
}
