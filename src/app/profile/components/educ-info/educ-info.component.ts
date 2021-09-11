import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educ-info',
  templateUrl: './educ-info.component.html',
  styleUrls: ['./educ-info.component.scss'],
})
export class EducInfoComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  saveForm(eduForm: NgForm) {
    console.log(eduForm.value);
    if (!eduForm.valid) return;
  }

}
