export class SpecInfoModel {
  constructor(
    public licenseNo: string,
    public medicalSystemNo: string,
    public specialties: number[],
    public universityOfFaculty: string,
    public id: number
  ) {}
}
