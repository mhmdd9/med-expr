import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IonicSelectableComponent } from "ionic-selectable";
import { BaseInfo } from "src/models/base-info.model";
import { SpecInfoModel } from "src/models/spec-info.model";
import { SpecInfoService } from "../../services/spec-info.service";

@Component({
  selector: "app-spec-info",
  templateUrl: "./spec-info.component.html",
  styleUrls: ["./spec-info.component.scss"],
})
export class SpecInfoComponent implements OnInit {
  @Input() userId: number;
  @ViewChild("specForm", { static: true }) ngForm: NgForm;
  provinces: BaseInfo[];
  province: BaseInfo;

  constructor(private service: SpecInfoService) {
    
  }

  ngOnInit() {
    this.service.findById(this.userId).subscribe((res) => {
      if (res == null) return;

      this.bindData(res);
    });
  }

  submitForm(specForm: NgForm) {
    if (!specForm.valid) return;

    this.service.saveSpecInfo(
      new SpecInfoModel(
        specForm.value.licenseNo,
        specForm.value.medicalSystemNo,
        specForm.value.specialties,
        specForm.value.universityOfFaculty,
        this.userId
      )
    );
  }

  bindData(res) {
    this.ngForm.form.setValue({
      licenseNo: res.province,
      licenseType: res.city,
      grade: res.homeAddress,
      acceptingCasesType: res.homePhone,
      acpWorkScopes: res.homePostalCode,
    });
  }

}
