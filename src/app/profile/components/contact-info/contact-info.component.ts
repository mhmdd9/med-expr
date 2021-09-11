import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactInfoModel } from "src/models/contact-info.model";
import { ContactInfoService } from "../../services/contact-info.service";
@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"],
})
export class ContactInfoComponent implements OnInit {
  @Input() userId: number;
  @ViewChild("cntForm", { static: true }) ngForm: NgForm;

  constructor(private service: ContactInfoService) {}

  ngOnInit() {
    this.service.findByUserId(this.userId).subscribe((res) => {
      if (res == null) return;

      this.bindData(res);
    });
  }

  submitForm(cntform: NgForm) {
    if (!cntform.valid) return;

    this.service.saveContactInfo(
      new ContactInfoModel(
        cntform.value.province,
        cntform.value.city,
        cntform.value.homeAddress,
        cntform.value.homePostalCode,
        cntform.value.homePhone,
        cntform.value.workAddress,
        cntform.value.workPostalCode,
        cntform.value.workPhone,
        cntform.value.website,
        this.userId
      )
    );
  }

  bindData(res) {
    this.ngForm.form.setValue({
      province: res.province,
      city: res.city,
      homeAddress: res.homeAddress,
      homePhone: res.homePhone,
      homePostalCode: res.homePostalCode,
      workAddress: res.workAddress,
      workPhone: res.workPhone,
      workPostalCode: res.workPostalCode,
      email: null,
      website: res.website
    });

  }
}
