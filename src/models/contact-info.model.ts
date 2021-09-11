import { UserModel } from "./user.model";

export class ContactInfoModel {
  private province: string;
  private city: string;
  private homeAddress: string;
  private homePostalCode: string;
  private homePhone: string;
  private workAddress: string;
  private workPostalCode: string;
  private workPhone: string;
  private website: string;
  private id: number;

  constructor(
    province: string,
    city: string,
    homeAddress: string,
    homePostalCode: string,
    homePhone: string,
    workAddress: string,
    workPostalCode: string,
    workPhone: string,
    website: string,
    userId: number
  ) {
    this.province = province;
    this.city = city;
    this.homeAddress = homeAddress;
    this.homePostalCode = homePostalCode;
    this.homePhone = homePhone;
    this.workAddress = workAddress;
    this.workPostalCode = workPostalCode;
    this.workPhone = workPhone;
    this.website = website;
    this.id = userId;
  }
}
