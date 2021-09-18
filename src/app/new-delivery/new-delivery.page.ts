import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-new-delivery",
  templateUrl: "./new-delivery.page.html",
  styleUrls: ["./new-delivery.page.scss"],
})
export class NewDeliveryPage implements OnInit {
  fabAction = false;
  newRequest = {
    title: 'ویزیت پزشک عمومی',
    subjectTitle: '-',
    customerFullName: 'احسان کریمی',
    customerCity: 'کرج',
    cost: '50000',
    hour: '8-10'
  }
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  toggleFab() {
    this.fabAction = !this.fabAction;
  }
  accepted() {
    this.navCtrl.navigateRoot(["./delivered-succesfully"]);
  }
}
