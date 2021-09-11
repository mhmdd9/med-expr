import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  @ViewChild('f') form :NgForm;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTohome() {
    if(!this.form.valid) return;

    this.navCtrl.navigateRoot(['./register']);
  } 
}
