import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-phone-number",
  templateUrl: "./phone-number.page.html",
  styleUrls: ["./phone-number.page.scss"],
})
export class PhoneNumberPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  onFormSubmit(form: NgForm) {
    if (!form.valid) return;

    this.route.navigate(["./verification"]);
  }
}
