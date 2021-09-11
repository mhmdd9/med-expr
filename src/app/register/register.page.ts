import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  navigateHome() {
    this.route.navigate(["./home"]);
  }

  selectUserType(type: Number) {
    this.navigateHome();
  }
}
