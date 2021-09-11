import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ProfileService } from "./services/profile.service";
import { UserModel } from "src/models/user.model";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  form: FormGroup;
  segment = 0;
  userId: number = 1;
  @ViewChild("slides", { static: true }) slider: IonSlides;

  constructor(
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    let resp: any;
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      lastName: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      nationalCode: new FormControl(null, {
        updateOn: "change",
        validators: [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      }),
      gender: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required],
      }),
      placeOfBirth: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      yearOfBirth: new FormControl(null, {
        updateOn: "change",
        validators: [
          Validators.required,
          Validators.min(1300),
          Validators.max(1380),
        ],
      }),
      phoneNumber: new FormControl(null, {
        updateOn: "change",
        validators: [
          Validators.required,
          // Validators.minLength(10),
          // Validators.maxLength(10),
          // Validators.pattern("^(09|9)\d{9}$")
        ],
      }),
    });
    this.profileService
      .findById(this.userId)
      .subscribe((res) => {
        resp = this.setData(res);
        this.setData(resp);
      });

    // this.form = this.fb.group({
    //   firstName: [temp.firstName, { updateOn: "blur" }, [Validators.required]],
    // });
  }

  setData(resp) {
    // let temp = this.profileService.findByPhoneNumber();
    if(resp == null)  return;

    this.form.setValue({
      firstName: resp.firstName,
      lastName: resp.lastName,
      gender: resp.gender,
      nationalCode: resp.nationalCode,
      phoneNumber: resp.phoneNumber,
      placeOfBirth: resp.placeOfBirth,
      yearOfBirth: resp.yearOfBirth,
    });
  }

  async onSegmentChange() {
    await this.slider.slideTo(this.segment);
  }

  async onSlideChange() {
    this.segment = await this.slider.getActiveIndex();
  }

  saveForm() {
    if(!this.form.valid) return;

    this.profileService.saveUser(
      new UserModel(
        null,
        0,
        this.form.value.firstName,
        this.form.value.lastName,
        this.form.value.nationalCode,
        this.form.value.gender,
        this.form.value.placeOfBirth,
        this.form.value.yearOfBirth,
        this.form.value.phoneNumber,
        0,
        false,
        null
      )
    ).subscribe(res => {
      this.userId = res.id;
    })
  }
}
