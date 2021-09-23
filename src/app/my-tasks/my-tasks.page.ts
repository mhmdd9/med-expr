import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.page.html',
  styleUrls: ['./my-tasks.page.scss'],
})
export class MyTasksPage implements OnInit {
  tasks = [
    {
      requestTitle: "بررسی نسخه",
      date: "10 مرداد 1400",
      time: "11:59 am",
      status: "در انتظار",
      statusId: "0"
    },
    {
      requestTitle: "بررسی نسخه",
      date: "8 مرداد 1400",
      time: "8:45 am",
      status: "انجام شده",
      statusId: "2"
    },
    {
      requestTitle: "بررسی نسخه",
      date: "8 مرداد 1400",
      time: "8:30 am",
      status: "انجام شده",
      statusId: "2"
    },
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  taskDetail() {
    this.route.navigate(['./task-detail']);
  }
}
