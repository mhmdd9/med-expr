import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  phoneNumber = '912 123 45 67'

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
console.log(form.value);
  }
}
