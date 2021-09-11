import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { ChatPage } from "../chat/chat.page";
@Component({
  selector: "app-accepted",
  templateUrl: "./accepted.page.html",
  styleUrls: ["./accepted.page.scss"],
})
export class AcceptedPage implements OnInit {
  fabAction = true;
  newRequest = {
    subjectTitle : 'بیمه',
    duration: '30',
    cost:'50000'
  }
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  toggleFab() {
    this.fabAction = !this.fabAction;
  }
  on_the_way() {
    this.navCtrl.navigateRoot(["./delivered-succesfully"]);
  }
  chat() {
    this.modalController
      .create({ component: ChatPage })
      .then((modalElement) => {
        modalElement.present();
      });
  }
}
