import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work-resume',
  templateUrl: './work-resume.component.html',
  styleUrls: ['./work-resume.component.scss'],
})
export class WorkResumeComponent implements OnInit {
  model = {
    selfDescription : 'abc'
  }

  constructor() { }

  ngOnInit() {}

  submitForm(form: NgForm) {
    console.log(form.value);
    if (!form.valid) return;
  }
}
