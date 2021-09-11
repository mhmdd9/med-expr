import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
})
export class WalletPage implements OnInit {
  transactions = [
    {
      requestTitle: "مشاوره تلفنی",
      quantity: "200,000",
      date: "10 مرداد 1400",
      time: "11:59 am",
      type: "دریافتی",
    },
    {
      requestTitle: "برداشت وجه",
      quantity: "50,000",
      date: "8 مرداد 1400",
      time: "8:45 am",
      type: "برداشت وجه",
    },
    {
      requestTitle: "مشاوره تلفنی",
      quantity: "150,000",
      date: "8 مرداد 1400",
      time: "8:30 am",
      type: "دریافتی",
    },
  ];

  qtySum: number = 350000;

  constructor(private route: Router) {}

  ngOnInit() {}
  send_to_bank() {
    this.route.navigate(["./send-to-bank"]);
  }
}
