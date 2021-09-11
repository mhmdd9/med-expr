export class UserModel {
  // private id: number;
  // private type: number;
  // private firstName: string;
  // private lastName: string;
  // private nationalCode: number;
  // private gender: number;
  // private placeOfBirth: string;
  // private yearOfBirth: number;
  // private phoneNumber: string;
  // private confirmationStatus: number;
  // private isActive: boolean;
  // private photo: number;
  
  constructor(
    public id: number,
    public type: number,
    public firstName: string,
    public lastName: string,
    public nationalCode: number,
    public gender: number,
    public placeOfBirth: string,
    public yearOfBirth: number,
    public phoneNumber: string,
    public confirmationStatus: number,
    public isActive: boolean,
    public photo: number
  ) {
    this.id = id;
    this.type = type;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalCode = nationalCode;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.confirmationStatus = confirmationStatus;
    this.placeOfBirth = placeOfBirth;
    this.yearOfBirth = yearOfBirth;
    this.isActive = isActive;
    this.photo = photo;
  }
}
