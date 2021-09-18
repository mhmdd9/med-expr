export class SpecInfoModel {
  constructor(
    public licenseNo: string,
    public medicalSystemNo: string,
    public specialtyCodes: number[],
    public universityOfFacultyName: string,
    public id: number
  ) {}
}
