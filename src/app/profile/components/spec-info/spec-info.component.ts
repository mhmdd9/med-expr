import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseInfoService} from 'src/app/services/base-info.service';
import {BaseInfo} from 'src/models/base-info.model';
import {SpecInfoModel} from 'src/models/spec-info.model';
import {SpecInfoService} from '../../services/spec-info.service';

@Component({
  selector: 'app-spec-info',
  templateUrl: './spec-info.component.html',
  styleUrls: ['./spec-info.component.scss'],
})
export class SpecInfoComponent implements OnInit {
  @Input() userId: number;
  @ViewChild('specForm', { static: true }) ngForm: NgForm;
  specialties: BaseInfo[];
  province: BaseInfo;

  constructor(private service: SpecInfoService, private baseInfoService: BaseInfoService) {

  }

  ngOnInit() {
    this.service.findById(this.userId).subscribe((res) => {
      if (res == null) { return; }

      this.bindData(res);
    });

    this.baseInfoService.findAllByTopicCode(101)
        .subscribe(res => this.specialties = res);
  }

  submitForm(specForm: NgForm) {
    if (!specForm.valid) { return; }
    this.service.saveSpecInfo(
      new SpecInfoModel(
        specForm.value.licenseNo,
        specForm.value.medicalSystemNo,
        specForm.value.specialties,
        specForm.value.universityOfFacultyName,
        this.userId
      )
    );
  }

  bindData(res) {
    this.ngForm.form.setValue({
      licenseNo: res.licenseNo,
      medicalSystemNo: res.medicalSystemNo,
      specialties: res.specialties,
      universityOfFacultyName: res.universityOfFacultyName,
    });
  }

}
